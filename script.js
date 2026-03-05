const buton = document.getElementById('renkButonu');

buton.addEventListener('click', () => {
    // Rastgele bir renk üretelim
    const rastgeleRenk = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = rastgeleRenk;
    console.log("Yeni renk: " + rastgeleRenk);
});