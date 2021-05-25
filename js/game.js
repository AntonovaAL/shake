const canvas = document.getElementbyId("game");
const ctx = canvas.getContext("2d");

//изображение игры 
const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

let box = 32;

let score = 0;

let food = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box,
};

let snake = [];
	snake[0] = {
		x: 9 * box,
		y: 10 * box
	};

	document.addEventListen("keydown", direction);

	let dir;

	function direction(event) {
		if(event.keyCode == 37 && dir != "right")
			dir = "left";
		else if(event.keyCode == 38 && dir != "down")
			dir = "up";
		else if(event.keyCode == 39 && dir != "left")
			dir = "right";
		else if(event.keyCode == 40 && dir != "up")
			dir = "down";
 	}

function eatTail(head, arr) {
	for(let i = 0; i < arr.length; i++) {
		if(head.x == arr[i].x && head.y == arr[i].y)
			clearInterval(game);
	}
}
function drawGame() {
	ctx.drawImage(ground, 0, 0);
	ctx.drawImage(foodImg, food.x, food.y);

	for(let i = 0; i < shake.length; i++) {
		ctx.fillStyle = i == 0 ? "green" : "red";
		ctx.fillRect(snake[i].x, snake[i].y, box, box);
	}
	
}


