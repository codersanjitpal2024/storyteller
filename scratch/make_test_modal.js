const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Also inject an auto-runner that runs openWhatmoreModal(0)
html = html.replace('id="whatmore-reels-modal"\n      class="fixed inset-0 z-[999999] bg-black/90 backdrop-blur-md hidden opacity-0',
                    'id="whatmore-reels-modal"\n      class="fixed inset-0 z-[999999] bg-black/90 backdrop-blur-md opacity-100 flex');

// In case the modal script initializes progress bar and UI
html = html.replace('</body>', `<script>
  window.addEventListener('load', () => {
    if (window.openWhatmoreModal) {
      window.openWhatmoreModal(0);
    }
  });
</script></body>`);

fs.writeFileSync('scratch/test-modal.html', html, 'utf8');
console.log('scratch/test-modal.html written successfully');
