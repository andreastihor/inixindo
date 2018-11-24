const NAMACACHE = 'mws-v1';

const filesToCache = 
[ 'index.html',
'CSS/index.css', 'CSS/kalkulator.css', 'CSS/leafleat.css', 'CSS/project3.css', 
'JS/index.js', 'JS/leafleat.js' , 'JS/project3.js',
'project2/images/bakmiaka.jpg','project2/images/binus.jpg','project2/images/lpm.jpg','project2/images/lw.jpg',
'project1/kalkulator.html' , 'project2/leafleat.html' , 'project3/index.html' , 
'project3/mws.json'
];


self.addEventListener('install', event => {
    console.log('Persiapan Cache');
    event.waitUntil(caches.open(NAMACACHE).then(cache => { return cache.addAll(filesToCache); }));
});



self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});


self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('wittr-') &&
                 !allCaches.includes(cacheName);
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});