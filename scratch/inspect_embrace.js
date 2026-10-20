const fs = require('fs');

function getDimensions(file) {
  const buf = fs.readFileSync(file);
  if (buf[0] === 0x89 && buf[1] === 0x50) { // PNG
    return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  } else if (buf[0] === 0xFF && buf[1] === 0xD8) { // JPEG
    let i = 2;
    while (i < buf.length) {
      if (buf[i] === 0xFF && (buf[i+1] >= 0xC0 && buf[i+1] <= 0xC3)) {
        return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }
  return { w: 0, h: 0 };
}

['images/Golden Garden Embrace-200kb.jpeg', '../Golden Garden Embrace.png'].forEach(f => {
  if (fs.existsSync(f)) {
    console.log(f, fs.statSync(f).size + ' bytes', getDimensions(f));
  }
});
