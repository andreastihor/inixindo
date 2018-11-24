if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('SW terdaftar', reg))
        .catch(err => console.log('SW Gagal: ', err));
}