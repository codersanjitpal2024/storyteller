Add-Type -AssemblyName System.Drawing
$ref = "C:\Users\MSI 1\.gemini\antigravity\brain\4157ab86-96f0-4da9-9b9a-6fac62268c72\.user_uploaded\media_1792403967074_88c92181.png"
$bmp = [System.Drawing.Bitmap]::FromFile($ref)

function Crop-Exact($x, $y, $w, $h, $name) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.DrawImage($bmp, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    $outPath = "c:\Users\MSI 1\Downloads\Parenting\images\$name"
    $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Created exact crop: $outPath ($w x $h)"
}

# 1. Left botanical branch without bottom wave line
Crop-Exact 0 35 55 195 "footer-left-leaves.png"

# 2. Right artwork
Crop-Exact 905 15 119 224 "footer-right-artwork.png"

# 3. Logo including the dot after WithTheMums.
Crop-Exact 85 55 222 52 "footer-logo-full.png"

$bmp.Dispose()
