Write-Host "Salam, bu Ziya'nın PowerShell skriptidir!"
Write-Host "İndi sistemində hansı OS olduğunu yoxlayıram..."
$os = Get-CimInstance -ClassName Win32_OperatingSystem
Write-Host "Sən $($os.Caption) sistemindəsən."
