const https = require('https');

https.get('https://www.instagram.com/wethemums/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    const reelsMatches = data.match(/reel\/[A-Za-z0-9_-]+/g) || [];
    console.log('Reels found:', [...new Set(reelsMatches)]);
    const desc = data.match(/<meta property="og:description" content="([^"]+)"/);
    if (desc) console.log('Description:', desc[1]);
  });
}).on('error', console.error);
