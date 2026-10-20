$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) {
    $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

$tempOut = "C:\Users\Public\screen-footer-index.png"
if (Test-Path $tempOut) { Remove-Item $tempOut -Force }

$finalOut = "c:\Users\MSI 1\Downloads\Parenting\images\screen-footer-index.png"

$script = @"
window.addEventListener('load', () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
});
"@

$indexPath = "c:\Users\MSI 1\Downloads\Parenting\index.html"
$content = Get-Content -Path $indexPath -Raw
$testContent = $content -replace "</body>", "<script>$script</script></body>"

$testFile = "c:\Users\MSI 1\Downloads\Parenting\scratch\test-footer-page.html"
Set-Content -Path $testFile -Value $testContent -Encoding UTF8

$url = "file:///c:/Users/MSI%201/Downloads/Parenting/scratch/test-footer-page.html"

$argsList = @(
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1400,600",
    "--virtual-time-budget=3000",
    "--screenshot=$tempOut",
    $url
)

Start-Process -FilePath $edge -ArgumentList $argsList -Wait
Start-Sleep -Seconds 2

if (Test-Path $tempOut) {
    Copy-Item $tempOut $finalOut -Force
    Write-Host "Success! File size: $((Get-Item $finalOut).Length)"
} else {
    Write-Host "Failed to capture footer screenshot."
}
