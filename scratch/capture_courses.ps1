$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) {
    $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}
$url = "file:///c:/Users/MSI%201/Downloads/Parenting/index.html"
$out = "C:\Users\Public\screen-courses-full.png"

$argsList = @(
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1400,6800",
    "--screenshot=$out",
    $url
)

Start-Process -FilePath $edge -ArgumentList $argsList -Wait
Start-Sleep -Seconds 2

if (Test-Path $out) {
    Add-Type -AssemblyName System.Drawing
    $bmp = [System.Drawing.Bitmap]::FromFile($out)
    
    # We want to crop the Parenting Courses section
    # Let's crop from Y approx 4400 to 5800 (height 1400)
    $y = 4400
    $h = 1350
    if ($y + $h -gt $bmp.Height) { $h = $bmp.Height - $y }
    
    $rect = New-Object System.Drawing.Rectangle(0, $y, $bmp.Width, $h)
    $cropped = New-Object System.Drawing.Bitmap($bmp.Width, $h)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.DrawImage($bmp, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    $dest = "c:\Users\MSI 1\Downloads\Parenting\images\courses-section-rendered.png"
    $ms = New-Object System.IO.MemoryStream
    $cropped.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    [System.IO.File]::WriteAllBytes($dest, $ms.ToArray())
    $ms.Dispose()
    $bmp.Dispose()
    Write-Host "Saved: $dest"
} else {
    Write-Host "Output file not found: $out"
}
