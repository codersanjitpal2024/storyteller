$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) {
    $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

$indexPath = "c:\Users\MSI 1\Downloads\Parenting\index.html"
$content = Get-Content -Path $indexPath -Raw

# Replace hidden and opacity-0 directly on the modal div so it's visible on render
$modalTestContent = $content.Replace('id="whatmore-reels-modal" class="fixed inset-0 z-[999999] bg-black/90 backdrop-blur-md hidden opacity-0', 'id="whatmore-reels-modal" class="fixed inset-0 z-[999999] bg-black/90 backdrop-blur-md opacity-100 flex')

$testFile = "c:\Users\MSI 1\Downloads\Parenting\scratch\test-modal.html"
Set-Content -Path $testFile -Value $modalTestContent -Encoding UTF8

$url = "file:///c:/Users/MSI%201/Downloads/Parenting/scratch/test-modal.html"
$out = "C:\Users\Public\screen-whatmore-modal.png"

if (Test-Path $out) { Remove-Item $out -Force }

$argsList = @(
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1400,980",
    "--virtual-time-budget=4000",
    "--screenshot=$out",
    $url
)

Start-Process -FilePath $edge -ArgumentList $argsList -Wait
Start-Sleep -Seconds 1

if (Test-Path $out) {
    Copy-Item $out "c:\Users\MSI 1\Downloads\Parenting\images\whatmore-modal-rendered.png" -Force
    Write-Host "Saved: images/whatmore-modal-rendered.png"
} else {
    Write-Host "Output file not found: $out"
}
