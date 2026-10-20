Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\MSI 1\.gemini\antigravity\brain\4157ab86-96f0-4da9-9b9a-6fac62268c72\.user_uploaded\media_1792399987802_855f1dea.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

$cropX = 545
$cropY = 0
$cropW = $src.Width - $cropX
$cropH = $src.Height

$cropRect = [System.Drawing.Rectangle]::new($cropX, $cropY, $cropW, $cropH)
$destRect = [System.Drawing.Rectangle]::new(0, 0, $cropW, $cropH)

$target = [System.Drawing.Bitmap]::new($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($target)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($src, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$src.Dispose()

# Make white/off-white background transparent (only near edges)
# Flood-fill or edge-aware transparency so inside photo white is not affected
$visited = New-Object 'bool[,]' $cropW, $cropH
$queue = New-Object System.Collections.Generic.Queue[System.Drawing.Point]

# Enqueue border pixels that are near-white (R, G, B >= 248)
for ($x = 0; $x -lt $cropW; $x++) {
    $p0 = $target.GetPixel($x, 0)
    if ($p0.R -ge 248 -and $p0.G -ge 248 -and $p0.B -ge 248) {
        $queue.Enqueue([System.Drawing.Point]::new($x, 0))
        $visited[$x, 0] = $true
    }
    $pEnd = $target.GetPixel($x, $cropH - 1)
    if ($pEnd.R -ge 248 -and $pEnd.G -ge 248 -and $pEnd.B -ge 248) {
        $queue.Enqueue([System.Drawing.Point]::new($x, $cropH - 1))
        $visited[$x, $cropH - 1] = $true
    }
}
for ($y = 0; $y -lt $cropH; $y++) {
    $p0 = $target.GetPixel(0, $y)
    if ($p0.R -ge 248 -and $p0.G -ge 248 -and $p0.B -ge 248) {
        $queue.Enqueue([System.Drawing.Point]::new(0, $y))
        $visited[0, $y] = $true
    }
    $pEnd = $target.GetPixel($cropW - 1, $y)
    if ($pEnd.R -ge 248 -and $pEnd.G -ge 248 -and $pEnd.B -ge 248) {
        $queue.Enqueue([System.Drawing.Point]::new($cropW - 1, $y))
        $visited[$cropW - 1, $y] = $true
    }
}

# BFS flood-fill transparency from borders inward
$transparentColor = [System.Drawing.Color]::FromArgb(0, 255, 255, 255)
while ($queue.Count -gt 0) {
    $pt = $queue.Dequeue()
    $target.SetPixel($pt.X, $pt.Y, $transparentColor)

    $neighbors = @(
        [System.Drawing.Point]::new($pt.X + 1, $pt.Y),
        [System.Drawing.Point]::new($pt.X - 1, $pt.Y),
        [System.Drawing.Point]::new($pt.X, $pt.Y + 1),
        [System.Drawing.Point]::new($pt.X, $pt.Y - 1)
    )

    foreach ($n in $neighbors) {
        if ($n.X -ge 0 -and $n.X -lt $cropW -and $n.Y -ge 0 -and $n.Y -lt $cropH) {
            if (-not $visited[$n.X, $n.Y]) {
                $visited[$n.X, $n.Y] = $true
                $px = $target.GetPixel($n.X, $n.Y)
                if ($px.R -ge 245 -and $px.G -ge 245 -and $px.B -ge 245) {
                    $queue.Enqueue($n)
                }
            }
        }
    }
}

$outPath = "c:\Users\MSI 1\Downloads\Parenting\images\you-are-not-alone-right-graphic.png"
$target.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$target.Dispose()

Write-Host "Saved transparent right graphic: $outPath with dimensions $cropW x $cropH"
