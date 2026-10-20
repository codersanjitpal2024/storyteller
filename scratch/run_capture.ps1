$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) {
    $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

$out = "C:\Users\Public\screen-modal.png"
if (Test-Path $out) { Remove-Item $out -Force }

$url = "file:///c:/Users/MSI%201/Downloads/Parenting/scratch/test-modal-open.html"

$argsList = @(
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1400,980",
    "--virtual-time-budget=3000",
    "--screenshot=$out",
    $url
)

Start-Process -FilePath $edge -ArgumentList $argsList -Wait
Start-Sleep -Seconds 2

if (Test-Path $out) {
    Copy-Item $out "c:\Users\MSI 1\Downloads\Parenting\images\screen-modal.png" -Force
    Write-Host "Successfully captured modal screenshot to images/screen-modal.png"
} else {
    Write-Host "File not found: $out"
}
