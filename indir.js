const fs = require('fs');               //FileStream kütüphanesi ekledik
const ytdl = require('ytdl-core');      //Ytdl kütüphanesini ekledin
const path = require('path');
function indir(url, dosyaAdi, path) {
    ytdl(url)
        .pipe(fs.createWriteStream(path + dosyaAdi + '.mp4'));
    return Promise.resolve("ok")
}