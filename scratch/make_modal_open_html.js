const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace the modal classes to make it open immediately for testing/capturing
html = html.replace('id="whatmore-reels-modal"\n      class="fixed inset-0 z-[999999] bg-black/92 backdrop-blur-md hidden opacity-0',
                    'id="whatmore-reels-modal"\n      class="fixed inset-0 z-[999999] bg-black/92 backdrop-blur-md opacity-100 flex');

html = html.replace('id="whatmore-reels-modal"\r\n      class="fixed inset-0 z-[999999] bg-black/92 backdrop-blur-md hidden opacity-0',
                    'id="whatmore-reels-modal"\r\n      class="fixed inset-0 z-[999999] bg-black/92 backdrop-blur-md opacity-100 flex');

// Inject auto-open script
html = html.replace('</body>', `<script>
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (window.openWhatmoreModal) {
        window.openWhatmoreModal(0);
      }
    }, 150);
  });
</script></body>`);

fs.writeFileSync('scratch/test-modal-open.html', html, 'utf8');
console.log('scratch/test-modal-open.html generated successfully');
