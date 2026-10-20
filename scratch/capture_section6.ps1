$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) {
    $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

$out = "C:\Users\Public\screen-section6.png"
if (Test-Path $out) { Remove-Item $out -Force }

$script = @"
window.addEventListener('load', () => {
  const el = document.getElementById('you-are-not-alone-section');
  if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
});
"@

$indexPath = "c:\Users\MSI 1\Downloads\Parenting\index.html"
$content = Get-Content -Path $indexPath -Raw
$testContent = $content -replace "</body>", "<script>$script</script></body>"

$testFile = "c:\Users\MSI 1\Downloads\Parenting\scratch\test-section6.html"
Set-Content -Path $testFile -Value $testContent -Encoding UTF8

$url = "file:///c:/Users/MSI%201/Downloads/Parenting/scratch/test-section6.html"

$argsList = @(
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1400,900",
    "--virtual-time-budget=3000",
    "--screenshot=$out",
    $url
)

Start-Process -FilePath $edge -ArgumentList $argsList -Wait
Start-Sleep -Seconds 2

if (Test-Path $out) {
    Copy-Item $out "c:\Users\MSI 1\Downloads\Parenting\images\screen-section6-matched.png" -Force
    Write-Host "Saved: images/screen-section6-matched.png"
}
