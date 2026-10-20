$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) {
    $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

# 1. Capture Trending Videos Section
$outSection = "C:\Users\Public\screen-trending-reels.png"
if (Test-Path $outSection) { Remove-Item $outSection -Force }

$argsSection = @(
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1400,900",
    "--virtual-time-budget=3000",
    "--screenshot=$outSection",
    "file:///c:/Users/MSI%201/Downloads/Parenting/index.html"
)
Start-Process -FilePath $edge -ArgumentList $argsSection -Wait
Start-Sleep -Seconds 1

if (Test-Path $outSection) {
    Copy-Item $outSection "c:\Users\MSI 1\Downloads\Parenting\images\screen-trending-reels.png" -Force
    Write-Host "Saved: images/screen-trending-reels.png"
}

# 2. Capture Open Reel Modal (no side cards, playable center frame)
$indexPath = "c:\Users\MSI 1\Downloads\Parenting\index.html"
$content = Get-Content -Path $indexPath -Raw
$modalOpenContent = $content.Replace('id="whatmore-reels-modal"`n      class="fixed inset-0 z-[999999] bg-black/92 backdrop-blur-md hidden opacity-0', 'id="whatmore-reels-modal"`n      class="fixed inset-0 z-[999999] bg-black/92 backdrop-blur-md opacity-100 flex')

# In case line break is CRLF
$modalOpenContent = $modalOpenContent.Replace("id=`"whatmore-reels-modal`"`r`n      class=`"fixed inset-0 z-[999999] bg-black/92 backdrop-blur-md hidden opacity-0", "id=`"whatmore-reels-modal`"`r`n      class=`"fixed inset-0 z-[999999] bg-black/92 backdrop-blur-md opacity-100 flex")

$testFile = "c:\Users\MSI 1\Downloads\Parenting\scratch\test-modal-open.html"
Set-Content -Path $testFile -Value $modalOpenContent -Encoding UTF8

$outModal = "C:\Users\Public\screen-modal-open.png"
if (Test-Path $outModal) { Remove-Item $outModal -Force }

$argsModal = @(
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1400,980",
    "--virtual-time-budget=4000",
    "--screenshot=$outModal",
    "file:///c:/Users/MSI%201/Downloads/Parenting/scratch/test-modal-open.html"
)
Start-Process -FilePath $edge -ArgumentList $argsModal -Wait
Start-Sleep -Seconds 1

if (Test-Path $outModal) {
    Copy-Item $outModal "c:\Users\MSI 1\Downloads\Parenting\images\screen-modal-open.png" -Force
    Write-Host "Saved: images/screen-modal-open.png"
}
