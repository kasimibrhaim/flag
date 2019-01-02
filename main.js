let frequency = 0.04;
let amplitude = 30;
let particleSizeMAX = 40;
let particleSize;
let columns = 14;
let rows = 6;
let xPos;
let yPos;
let offset;
let rowSpacing = 36;
let margin = 100;
let colorA;
let colorB;

function setup() {
	createCanvas(600, 600);

	colorA = color(255, 255, 0);
	colorB = color(0, 255, 255);

	noStroke();
}

function draw() {
	background(4, 58, 74);
	translate(0, height / 2);

	offset = 0;


	for (let col = 0; col < columns; col++) {
		xPos = cosFunc(frequency, offset - col/columns, -amplitude, amplitude) + map(col, 0, columns - 1, margin, width - margin);

		for (let row = 0; row < rows; row++) {
			particleMoveDown = row * rowSpacing - (rows * rowSpacing) / 2;
			yPos = cosFunc(frequency, offset, -amplitude, amplitude) + particleMoveDown;

			particleSize = cosFunc(frequency, offset - row*2 / rows, -10, particleSizeMAX);

			fill(lerpColor(colorA, colorB, row / rows));
			ellipse(xPos, yPos, particleSize);
		}

		offset = offset + PI / 10;
	}
}


function sinFunc(freq, off, min, max) {
	return map(sin(frameCount * freq + off), -1, 1, min, max);
}

function cosFunc(freq, off, min, max) {
	return map(cos(frameCount * freq + off), -1, 1, min, max);
}
