let box = document.querySelector('.banner');
let small = box.querySelector('ul li');
let layer = document.createElement('div');
layer.className = 'layer';
box.appendChild(layer);
let view = document.createElement('div');
view.className = 'view';
box.appendChild(view);
console.log(view)
let big = document.createElement('div');
big.className = 'big';
view.appendChild(big);
let img = document.createElement('img');
big.appendChild(img);
let imgBoxs = box.querySelectorAll('ul li');
let imgs = box.querySelectorAll('ul li img');
for (var i = 0; i < imgBoxs.length; i++) {
    let classNames = imgBoxs[i].className;
    if (classNames == 'active') {
        console.dir(imgs[i])
        img.src = imgs[i].src;
        break;
    }
}
let bigX = big.offsetWidth - view.offsetWidth;
let bigY = big.offsetHeight - view.offsetHeight;
let smallX = small.offsetWidth - layer.offsetWidth;
let smallY = small.offsetHeight - layer.offsetHeight;
box.onmousemove = function(e) {
    for (var i = 0; i < imgBoxs.length; i++) {
        let classNames = imgBoxs[i].className;
        if (classNames == 'active') {
            console.dir(imgs[i])
            img.src = imgs[i].src;
            break;
        }
    }
    let x =
        e.clientX - box.offsetLeft - layer.offsetWidth / 2;
    let y =
        e.clientY - box.offsetTop - layer.offsetHeight / 2;
    x = x <= 0 ? 0 : x;
    y = y <= 0 ? 0 : y;
    x = x > small.offsetWidth - layer.offsetWidth ?
        small.offsetWidth - layer.offsetWidth : x;
    y = y > small.offsetHeight - layer.offsetHeight ?
        small.offsetHeight - layer.offsetHeight : y;
    layer.style.left = x + 'px';
    layer.style.top = y + 'px';
    big.style.left = -(x * bigX / smallX) + 'px';
    big.style.top = -(y * bigY / smallY) + 'px';
}