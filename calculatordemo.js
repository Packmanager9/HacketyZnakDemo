

    let keysPressed = {}

    document.addEventListener('keydown', (event) => {
        keysPressed[event.key] = true;
    });
    document.addEventListener('keyup', (event) => {
        delete keysPressed[event.key];
    });
let zimgs = []

for (let i = 0; i < 60; i++) {
    zimgs.push(Object.assign(new Image(), { 'src': `a${i}.png` }));
}

const tutorial_canvas = document.getElementById("tutorial");
const tutorial_canvas_context = tutorial_canvas.getContext('2d');
tutorial_canvas.style.background = "#FFFFFF00"

let flex = tutorial_canvas.getBoundingClientRect();

// Add the event listeners for mousedown, mousemove, and mouseup
const tip = {}
let xs
let ys

let widthtext = 30
tutorial_canvas_context.fillStyle = "black";
tutorial_canvas_context.font = `${widthtext}px Arial`;

// let keysPressed = {}

// document.addEventListener('keydown', (event) => {

//     if (event.key > -1 && event.key < 10) {
//         keysPressed[event.key] = true;
//     }
//     counter = 0
//     let num = Object.keys(keysPressed)
//     if (num.length == 1) {
//         if (!num.includes(' ')) {
//             workingnum.push(parseInt(num.join(''), 10))
//             console.log(workingnum)
//             if (widther(workingnum.join('')) > tutorial_canvas.width - 20) {
//                 widthtext /= 1 + (1 / workingnum.length)
//                 tutorial_canvas_context.clearRect(0, 0, tutorial_canvas.width, tutorial_canvas.height)
//                 tutorial_canvas_context.font = `${widthtext}px Arial`;
//             }
//         }
//     }




//     if (keysPressed[' ']) {
//         let thisnum = new BaseSixtyNumber(BigInt(workingnum.join('')))
//         console.log(workingnum.join(''))
//     } else if (event.key == 'x') {
//         tutorial_canvas_context.clearRect(0, 0, tutorial_canvas.width, tutorial_canvas.height)
//         widthtext = 30
//         tutorial_canvas_context.font = `${widthtext}px Arial`;
//         workingnum = []
//     } else {
//         tutorial_canvas_context.fillText(`${workingnum.join('')}`, 10, 50)
//     }
// });

document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key.toLocaleLowerCase()];
});


window.addEventListener('mousedown', e => {
    flex = tutorial_canvas.getBoundingClientRect();
    xs = e.clientX - flex.left;
    ys = e.clientY - flex.top;
    tip.x = xs
    tip.y = ys
    tip.body = tip
});


class BaseSixtyNumber {
    constructor(num) {
        this.number = num
        this.digits = this.sixtify(num)

        tutorial_canvas_context.clearRect(0, 0, tutorial_canvas.width, tutorial_canvas.height)
        for (let t = 0; t < this.digits.length; t++) {
            tutorial_canvas_context.drawImage(zimgs[this.digits[t]], 0, 0, zimgs[this.digits[t]].width, zimgs[this.digits[t]].height, 350,100,300,300)

            tutorial_canvas_context.font = `${100 / 2}px Arial`;
            if (t < this.digits.length - 1) {
                tutorial_canvas_context.fillText(`${this.digits[t]},`, 10 + (t * Math.min((tutorial_canvas.width / this.digits.length), 50)), 200)
            } else {
                tutorial_canvas_context.fillText(`${this.digits[t]}`, 10 + (t * Math.min((tutorial_canvas.width / this.digits.length), 50)), 200)
            }
        }

        tutorial_canvas_context.font = `${widthtext}px Arial`;
        tutorial_canvas_context.fillText(`${workingnum.join('')}`, 10, 50)
    }
    sixtify(num) {
        let arr = []
        let length = -1
        let t = 1
        for (let q = 0; (t - 2) < num; q++) {
            t *= 60

            length += 1

            if (q > 10000) {
                break
            }
        }
        for (let t = length; t >= 0; t--) {
            let f = BigInt(1)
            for (let g = 0; g < t; g++) {
                f *= BigInt(60)
            }
            let digit = BigInt(num / ((f)))
            arr.push(digit)
            if(arr.length > 1){
               arr = arr.filter(a => a!=BigInt(0))
            }
            num = num % (f)
            console.log(f, num)
        }
        return arr
    }


}


let global0 = BigInt(0)
let workingnum = []
let counter = 0



window.setInterval(function(){ 
    let show = new BaseSixtyNumber(global0)
    counter++

    if(keysPressed['d']){
        global0++
        if(global0>59){
            global0 = BigInt(0)
        }
        console.log(global0)
    }
    if(keysPressed['a']){
        global0--
        if(global0<0){
            global0 = BigInt(59)
        }
        console.log(global0)
    }
    
}, 170)

function widther(txt) {
    return tutorial_canvas_context.measureText(txt).width
}

// let bumber = new BaseSixtyNumber(7200)