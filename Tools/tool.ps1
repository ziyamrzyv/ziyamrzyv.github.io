<#
.ZN    ziya.ps1
.DESCR Wrapper for small tools. Usage:
  - Interactive: `irm URL | iex` or run downloaded file.
  - Parameter: `.\ziya.ps1 -cmd 1`
#>

param(
  [int]$cmd = 0
)

function Show-Menu {
  Clear-Host
  Write-Host "ZIYA TOOLS - MENU" -ForegroundColor Cyan
  Write-Host "1) Show public IP and interface info"
  Write-Host "2) Activation test (dummy)"
  Write-Host "3) Ping test (to host)"
  Write-Host "0) Exit"
  $choice = Read-Host "Choose number"
  return [int]$choice
}

function Run-RemoteScript($url) {
  Write-Host "Fetching: $url" -ForegroundColor Yellow
  try {
    $code = Invoke-RestMethod -Uri $url -UseBasicParsing -ErrorAction Stop
    Invoke-Expression $code
  } catch {
    Write-Error "Failed to fetch or execute $url - $_"
  }
}

# If user provided param, use that; otherwise interactive
if ($cmd -gt 0) {
  $choice = $cmd
} else {
  $choice = Show-Menu
}

switch ($choice) {
  1 {
    # You can either inline the logic or fetch netdiag.ps1
    $scriptUrl = 'https://ziya.is-a.dev/tools/scripts/netdiag.ps1'
    Run-RemoteScript $scriptUrl
  }
  2 {
    $scriptUrl = 'https://ziya.is-a.dev/tools/scripts/activation.ps1'
    Run-RemoteScript $scriptUrl
  }
  3 {
    $scriptUrl = 'https://ziya.is-a.dev/tools/scripts/pingtest.ps1'
    Run-RemoteScript $scriptUrl
  }
  0 { Write-Host "Bye." }
  default { Write-Warning "Unknown option: $choice" }
}
