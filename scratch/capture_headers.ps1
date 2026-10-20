$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) {
    $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

$pages = @("about.html", "stories.html", "courses.html", "contact.html")

foreach ($p in $pages) {
    $tempOut = "C:\Users\Public\screen-header-$p.png"
    if (Test-Path $tempOut) { Remove-Item $tempOut -Force }
    $args = @(
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--window-size=1400,600",
        "--virtual-time-budget=3000",
        "--screenshot=$tempOut",
        "file:///c:/Users/MSI%201/Downloads/Parenting/$p"
    )
    Start-Process -FilePath $edge -ArgumentList $args -Wait
    Start-Sleep -Milliseconds 500
    if (Test-Path $tempOut) {
        $dest = "c:\Users\MSI 1\Downloads\Parenting\images\screen-header-$p.png"
        Copy-Item $tempOut $dest -Force
        Write-Host "Success: $dest"
    } else {
        Write-Host "Failed: $tempOut"
    }
}
