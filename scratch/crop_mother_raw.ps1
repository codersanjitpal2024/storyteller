Add-Type -AssemblyName System.Drawing
$ref = "C:\Users\MSI 1\.gemini\antigravity\brain\4157ab86-96f0-4da9-9b9a-6fac62268c72\.user_uploaded\media_1792403967074_88c92181.png"
$bmp = [System.Drawing.Bitmap]::FromFile($ref)

# Crop mother at full original pixels: x=900, y=110, w=124, h=138
$rect = New-Object System.Drawing.Rectangle(900, 110, 124, 138)
$cropped = New-Object System.Drawing.Bitmap(124, 138)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$g.DrawImage($bmp, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$out = "c:\Users\MSI 1\Downloads\Parenting\images\raw-mother-crop.png"
$cropped.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()

# Also crop the top text: x=885, y=10, w=130, h=100
$rectText = New-Object System.Drawing.Rectangle(885, 10, 130, 100)
$croppedText = New-Object System.Drawing.Bitmap(130, 100)
$gText = [System.Drawing.Graphics]::FromImage($croppedText)
$gText.DrawImage($bmp, 0, 0, $rectText, [System.Drawing.GraphicsUnit]::Pixel)
$gText.Dispose()

$outText = "c:\Users\MSI 1\Downloads\Parenting\images\raw-text-crop.png"
$croppedText.Save($outText, [System.Drawing.Imaging.ImageFormat]::Png)
$croppedText.Dispose()

$bmp.Dispose()
Write-Host "Cropped raw mother and raw text"
