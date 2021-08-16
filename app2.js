'use strict'

const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const out = document.querySelector('.out');
const show = document.querySelector('.show-out-btn');
const sec = document.querySelector('.section');
//
//Генерируем Хекс Код цвета
//
const randcolor = () => {
    let str = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        let rand = Math.floor(Math.random() * 16);
        color += str[rand];
    }
    return color;
}


function generateArrOfColors () {
    let arr = [];
    const counter = Math.round(2 - 0.5 + Math.random() * 4);
    for (let i = 0; i < counter; i++) {
        arr.push(randcolor())
    }

    return arr;
};

function generateArrOfColorsNotRandom(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randcolor())
    }

    return arr;
};

//
function generateLinearGradient(arr) {
    const colors = arr.join(',');

    const deg = Math.round(0 - 0.5 + Math.random() * 180);
    sec.style.cssText += `background: linear-gradient(${deg}deg, ${colors});`;
    out.textContent = `background: linear-gradient(${deg}deg, ${colors});`;
}

/////
////////Radial Gradient
////
function generateRadialGradient(arr) {
    const colors = arr.join(',');

    // const deg = Math.round(0 - 0.5 + Math.random() * 180);
    sec.style.cssText += `background: radial-gradient(${colors});`;
    out.textContent = `background: radial-gradient(${colors});`;
};

function generateReapitingRadialGradient(arr) {

    const proc = Math.round(0 - 0.5 + Math.random() * 100) + '%';
    // const deg = Math.round(0 - 0.5 + Math.random() * 180);
    sec.style.cssText += `background: repeating-radial-gradient(${arr[0]}, ${arr[1]} ${proc});`;
    out.textContent = `background: repeating-radial-gradient(${arr[0]}, ${arr[1]} ${proc});`;
};
/////
////Conic Gradient

function generateConicGradient(arr) {
    const colors = arr.join(',');

    const deg = Math.round(0 - 0.5 + Math.random() * 360);
    sec.style.cssText += `background: conic-gradient(from ${deg}deg, ${colors});`;
    out.textContent = `background: conic-gradient(from ${deg}deg, ${colors});`;
};

//////

function generateStriptedGradient(arr) {
    const procent = Math.floor(100 / Number(arr.length));
    let bufArr = [];
    for (let i = 0; i < arr.length; i++) {
        bufArr.push(arr[i] += ` ${procent}%`);
    }

    const colors = bufArr.join(',');
    
    let arrayOfDirection = ['to top', 'to left', 'to bottom', 'to right', 'to top left', 'to top right', 'to bottom left', 'to bottom right'];
    
    const rand = (x) => {
        return Math.floor(Math.random() * x);
    };
    let randDirection = '';

    randDirection += arrayOfDirection.splice(rand(arrayOfDirection.length), 1);


    sec.style.cssText += `background: linear-gradient(${randDirection}, ${colors});`;

    out.textContent = `background: linear-gradient(${randDirection}, ${colors});`;
};
//////Stacked
////////////////////////////////
////////////////////////////////

function hexToRgb(hex, alpha) {
    hex   = hex.replace('#', '');
    var r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
    var g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
    var b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
    if ( alpha ) {
       return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    }
    else {
       return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
};


function generateStackedLinear() {
    const deg1 = Math.round(0 - 0.5 + Math.random() * 360);
    const deg2 = Math.round(0 - 0.5 + Math.random() * 360);
    const deg3 = Math.round(0 - 0.5 + Math.random() * 360);

    let color1, color2, color3;
    color1 = Math.round(1 - 0.5 + Math.random() * 255);
    color2 = Math.round(1 - 0.5 + Math.random() * 255);
    color3 = Math.round(1 - 0.5 + Math.random() * 255);

    let newColor1 = `rgb(${color1}, 0, 0)`;
    let newColor2 = `rgb(0, ${color2}, 0)`;
    let newColor3 = `rgb(0, 0, ${color3})`;

    let newColor11 = `rgb(${color1}, 0, 0, 0.8)`;
    let newColor12 = `rgb(0, ${color2}, 0, 0.8)`;
    let newColor13 = `rgb(0, 0, ${color3}, 0.8)`;


    sec.style.cssText += `
    background: 
        linear-gradient(${deg1}deg, ${newColor11}, ${newColor1} 70.71%),
        linear-gradient(${deg2}deg, ${newColor12}, ${newColor2} 70.71%),
        linear-gradient(${deg3}deg, ${newColor13}, ${newColor3} 70.71%);`;

    
    out.textContent = `
    background: 
        linear-gradient(${deg1}deg, ${newColor11}, ${newColor1} 70.71%),
        linear-gradient(${deg2}deg, ${newColor12}, ${newColor2} 70.71%),
        linear-gradient(${deg3}deg, ${newColor13}, ${newColor3} 70.71%);`;
}


// console.log(generateStackedLinear(generateArrOfColorsNotRandom(3)))
// //


///////////////
////////////////


function generateMultiPosition(arr) {
    
    let arrayOfDirection = ['to top', 'to left', 'to bottom', 'to right', 'to top left', 'to top right', 'to bottom left', 'to bottom right'];
    
    const rand = (x) => {
        return Math.floor(Math.random() * x);
    };
    let randDirection = '';

    randDirection += arrayOfDirection.splice(rand(arrayOfDirection.length), 1);

    sec.style.cssText += `background: linear-gradient(${randDirection},
        ${arr[0]} 20%, ${arr[1]} 20% 40%, ${arr[2]} 40% 60%, ${arr[3]} 60% 80%, ${arr[4]} 80%);`;

    out.textContent = `background: linear-gradient(${randDirection},
        ${arr[0]} 20%, ${arr[1]} 20% 40%, ${arr[2]} 40% 60%, ${arr[3]} 60% 80%, ${arr[4]} 80%);`;

}


btn.addEventListener('click', () => {
    generateLinearGradient(generateArrOfColors());
});

btn2.addEventListener('click', () => {
    generateStriptedGradient(generateArrOfColors());
});

btn3.addEventListener('click', () => {
    generateRadialGradient(generateArrOfColorsNotRandom(2));
});

btn4.addEventListener('click', () => {
    generateConicGradient(generateArrOfColorsNotRandom(2));
});

btn5.addEventListener('click', () => {
    generateStackedLinear(generateArrOfColorsNotRandom(3));
});


btn6.addEventListener('click', () => {
    generateMultiPosition(generateArrOfColorsNotRandom(5));
});

btn7.addEventListener('click', () => {
    generateReapitingRadialGradient(generateArrOfColorsNotRandom(2));
});
show.addEventListener('click', () =>{
    out.classList.toggle('show-out');
    show.classList.toggle('animate');
})