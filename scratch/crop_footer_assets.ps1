Add-Type -AssemblyName System.Drawing
$ref = "C:\Users\MSI 1\.gemini\antigravity\brain\4157ab86-96f0-4da9-9b9a-6fac62268c72\.user_uploaded\media_1792403967074_88c92181.png"
$bmp = [System.Drawing.Bitmap]::FromFile($ref)

# Let's crop:
# 1. footer-left-leaves: x=0, y=70, w=55, h=155
# 2. footer-logo-icon: x=85, y=55, w=50, h=55
# 3. footer-right-doodle: x=880, y=15, w=140, h=230

function Crop-Image($x, $y, $w, $h, $name) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.DrawImage($bmp, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    $outPath = "c:\Users\MSI 1\Downloads\Parenting\images\$name"
    $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Saved $outPath ($w x $h)"
}

Crop-Image 0 80 50 145 "footer-left-leaves.png"
Crop-Image 85 58 45 48 "footer-logo-icon.png"
Crop-Image 880 15 144 230 "footer-right-artwork.png"

# Also let's check the bottom wave boundary between y=235 and y=255
for ($x = 0; $x -lt 1024; $x += 100) {
    for ($y = 230; $y -lt 260; $y++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 100 -and $c.B -lt 60) {
            Write-Host "Wave top at x=$x is y=$y"
            break
        }
    }
}

$bmp.Dispose()
