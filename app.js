navigator.serviceWorker.register('sw.js', { scope: '/' }).then(function(reg) {
  if(reg.installing) {
    console.log('installing');
  } else if(reg.waiting) {
    console.log('installed');
  } else if(reg.active) {
    console.log('active');
  }
}).catch(function(error) {
  console.log('Registration failed ' + error);
});
