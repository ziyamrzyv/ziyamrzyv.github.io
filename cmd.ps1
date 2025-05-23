Write-Host "Hacklandin"
Write-Host "HA HA HA"
$os = Get-CimInstance -ClassName Win32_OperatingSystem
Write-Host "Your OS is $($os.Caption)."
