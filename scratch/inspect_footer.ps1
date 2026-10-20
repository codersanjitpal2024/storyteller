Add-Type -AssemblyName System.Drawing
$ref = "C:\Users\MSI 1\.gemini\antigravity\brain\4157ab86-96f0-4da9-9b9a-6fac62268c72\.user_uploaded\media_1792403967074_88c92181.png"
$bmp = [System.Drawing.Bitmap]::FromFile($ref)

Write-Host "Width: $($bmp.Width) Height: $($bmp.Height)"
Write-Host "Top white bg (200, 20): $($bmp.GetPixel(200, 20))"
Write-Host "Bottom bar bg (200, 280): $($bmp.GetPixel(200, 280))"
Write-Host "Bottom bar bg (500, 275): $($bmp.GetPixel(500, 275))"
Write-Host "Left leaves sample (15, 120): $($bmp.GetPixel(15, 120))"

$bmp.Dispose()
