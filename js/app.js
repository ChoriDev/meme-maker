const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

// // // house
// // roof
// ctx.moveTo(300, 50);
// ctx.lineTo(200, 150);
// ctx.lineTo(400, 150);
// ctx.lineTo(300, 50);
// ctx.strokeStyle = "red";
// ctx.stroke();

// // wall
// ctx.strokeStyle = "orange";
// ctx.strokeRect(200, 150, 200, 200);

// // door
// ctx.strokeStyle = "brown";
// ctx.strokeRect(240, 350, 40, -70);

// // window
// ctx.strokeRect(310, 200, 60, 60);
// ctx.moveTo(340, 200);
// ctx.lineTo(340, 260);
// ctx.moveTo(310, 230);
// ctx.lineTo(370, 230);
// ctx.stroke();

// // human
// head
ctx.beginPath();
ctx.arc(300, 250, 15, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();

// hat
ctx.beginPath();
ctx.moveTo(300, 240);
ctx.arc(300, 245, 20, 1 * Math.PI, 2 * Math.PI);
ctx.fillStyle = "orange";
ctx.fill();
ctx.closePath();

// eyes
ctx.beginPath();
ctx.arc(295, 245, 3, 0, 2 * Math.PI);
ctx.arc(305, 245, 3, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

// mouth
ctx.beginPath();
ctx.arc(300, 253, 8, 0, 1 * Math.PI);
ctx.fill();
ctx.closePath();

// body
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(285, 270, 30, 60, 8);
ctx.closePath();

// left arm
ctx.beginPath();
ctx.fillRect(270, 270, 10, 50, 8);
ctx.closePath();

// right arm
ctx.beginPath();
ctx.fillRect(320, 270, 10, 50, 8);
ctx.closePath();

// left leg
ctx.beginPath();
ctx.fillRect(285, 330, 10, 50, 8);
ctx.closePath();

// right leg
ctx.beginPath();
ctx.fillRect(305, 330, 10, 50, 8);
ctx.closePath();
