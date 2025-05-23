Write-Host "Hacklandin"
Write-Host "HA HA HA"
$os = Get-CimInstance -ClassName Win32_OperatingSystem
Write-Host "$($os.Caption) - your OS system."
