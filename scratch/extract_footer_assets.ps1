Add-Type -AssemblyName System.Drawing
$ref = "C:\Users\MSI 1\.gemini\antigravity\brain\4157ab86-96f0-4da9-9b9a-6fac62268c72\.user_uploaded\media_1792403967074_88c92181.png"
$bmp = [System.Drawing.Bitmap]::FromFile($ref)

function Crop-Transparent($x, $y, $w, $h, $name) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    
    for ($px = 0; $px -lt $w; $px++) {
        for ($py = 0; $py -lt $h; $py++) {
            $srcX = $x + $px
            $srcY = $y + $py
            if ($srcX -lt $bmp.Width -and $srcY -lt $bmp.Height) {
                $c = $bmp.GetPixel($srcX, $srcY)
                # If pixel is close to background (R>245, G>240, B>235)
                if ($c.R -gt 246 -and $c.G -gt 243 -and $c.B -gt 238) {
                    $cropped.SetPixel($px, $py, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
                } else {
                    $cropped.SetPixel($px, $py, $c)
                }
            }
        }
    }
    
    $outPath = "c:\Users\MSI 1\Downloads\Parenting\images\$name"
    $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Created transparent: $outPath ($w x $h)"
}

# 1. Left leaves
Crop-Transparent 0 50 60 190 "footer-left-leaves.png"

# 2. Logo icon
Crop-Transparent 86 59 42 46 "footer-logo-icon.png"

# 3. Right artwork (mother + text)
Crop-Transparent 896 15 128 228 "footer-right-artwork.png"

$bmp.Dispose()
