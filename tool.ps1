<#
.ZIYA Single-file Tools
Usage:
  - Interactive: irm 'https://ziya.is-a.dev/tools/ziya.ps1' | iex
  - Non-interactive: powershell -File ziya.ps1 -cmd 1
#>

param(
  [int]$cmd = 0,
  [switch]$AutoConfirm = $false
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Write-Info($t){ Write-Host $t -ForegroundColor Cyan }
function Write-Succ($t){ Write-Host $t -ForegroundColor Green }
function Write-Warn($t){ Write-Host $t -ForegroundColor Yellow }
function Write-Err($t){ Write-Host $t -ForegroundColor Red }

function Confirm-OrAbort([string]$msg){
  if ($AutoConfirm) { return $true }
  $r = Read-Host "$msg  (y/N)"
  if ($r -match '^(y|yes)$') { return $true }
  Write-Warn "Aborted by user."
  return $false
}

function Show-PublicIP {
  Write-Info "Fetching public IP..."
  try {
    $pub = Invoke-RestMethod -Uri 'https://api.ipify.org?format=json' -UseBasicParsing -ErrorAction Stop
    Write-Succ "Public IP: $($pub.ip)"
  } catch {
    Write-Err "Could not get public IP: $_"
  }

  Write-Info "`nLocal IPv4 addresses:"
  try {
    if (Get-Command -Name Get-NetIPAddress -ErrorAction SilentlyContinue) {
      Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike '169.*' } `
        | Select-Object InterfaceAlias, IPAddress, PrefixLength | Format-Table -AutoSize
    } else {
      ipconfig | Out-String | Write-Host
    }
  } catch {
    Write-Warn "Could not list local addresses: $_"
  }

  try {
    Write-Info "`nDNS servers:"
    if (Get-Command -Name Get-DnsClientServerAddress -ErrorAction SilentlyContinue) {
      Get-DnsClientServerAddress | Select-Object InterfaceAlias, ServerAddresses | Format-List
    } else {
      Write-Warn "DNS listing not available on this platform."
    }
  } catch { Write-Warn "DNS lookup failed: $_" }
}

function Run-ActivationTest {
  Write-Info "Activation test (demo)."
  if (-not (Confirm-OrAbort "Run demo activation?")) { return }
  Start-Sleep -Seconds 1
  Write-Succ "✅ Activation OK (demo mode)."
}

function Ping-Test {
  param([string]$Host = "8.8.8.8", [int]$Count = 4)
  Write-Info "Pinging $Host ($Count times)..."
  try {
    $res = Test-Connection -ComputerName $Host -Count $Count -ErrorAction Stop
    $res | Select-Object Address, ResponseTime | Format-Table -AutoSize
  } catch {
    Write-Warn "Ping failed with Test-Connection: attempting fallback (ping exe)..."
    ping $Host -n $Count
  }
}

function Pause { Write-Host "`nPress Enter to continue..."; Read-Host }

function Show-MenuAndRun {
  while ($true) {
    Clear-Host
    Write-Host "================ ZIYA TOOLS ================" -ForegroundColor Magenta
    Write-Host "1) Show public IP & local interfaces"
    Write-Host "2) Activation test (demo)"
    Write-Host "3) Ping test (to host)"
    Write-Host "9) Open scripts folder URL in browser"
    Write-Host "0) Exit"
    Write-Host "--------------------------------------------"
    $choice = Read-Host "Choose number"

    switch ($choice) {
      '1' { Show-PublicIP; Pause }
      '2' { Run-ActivationTest; Pause }
      '3' {
        $h = Read-Host "Hostname or IP (default 8.8.8.8)"
        if (-not $h) { $h = '8.8.8.8' }
        Ping-Test -Host $h -Count 4
        Pause
      }
      '9' {
        $u = 'https://ziya.is-a.dev/tools/'   # <- kendi domainin burada
        Start-Process $u
      }
      '0' { Write-Info "Bye."; break }
      default { Write-Warn "Unknown option: $choice"; Pause }
    }
  }
}

try {
  if ($cmd -gt 0) {
    switch ($cmd) {
      1 { Show-PublicIP }
      2 { Run-ActivationTest }
      3 {
        $h = Read-Host "Hostname or IP (default 8.8.8.8)"
        if (-not $h) { $h = '8.8.8.8' }
        Ping-Test -Host $h -Count 4
      }
      default { Write-Warn "Unknown cmd: $cmd" }
    }
  } else {
    Show-MenuAndRun
  }
} catch {
  Write-Err "An error occurred: $_"
  exit 1
}
exit 0