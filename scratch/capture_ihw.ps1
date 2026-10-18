$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) {
    $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}
$url = "https://www.indianhairworld.com/"
$out = "C:\Users\Public\screen-ihw.png"

$argsList = @(
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1400,3200",
    "--screenshot=$out",
    $url
)

Start-Process -FilePath $edge -ArgumentList $argsList -Wait
Start-Sleep -Seconds 3

if (Test-Path $out) {
    Copy-Item $out "c:\Users\MSI 1\Downloads\Parenting\images\ihw-trending.png"
    Write-Host "Captured IHW to images/ihw-trending.png"
} else {
    Write-Host "Failed to capture $out"
}
