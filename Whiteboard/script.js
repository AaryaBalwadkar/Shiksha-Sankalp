const canvas = document.getElementById('whiteboard');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

let painting = false;
let brushColor = document.getElementById('colorPicker').value;
let brushSize = document.getElementById('sizePicker').value;
let isErasing = false;

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    if (isErasing) {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = brushSize * 2;
    } else {
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = brushSize;
    }

    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

document.getElementById('colorPicker').addEventListener('change', function () {
    brushColor = this.value;
    isErasing = false;
});

document.getElementById('sizePicker').addEventListener('input', function () {
    brushSize = this.value;
});

document.getElementById('clear').addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('eraser').addEventListener('click', function () {
    isErasing = true;
});
