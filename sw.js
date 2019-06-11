self.addEventListener('install', function(event) {
});

self.addEventListener('activate', function(event) {
  console.log('activating...');
});

self.addEventListener('fetch', function(event) {
  console.log('fetching...');
  console.log(event);
});
