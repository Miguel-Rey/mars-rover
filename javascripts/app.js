//Mars Grid

var grid =[
	[null, null, "rock", null, null, null, null, null, null, "rock"],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, "rock", null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, "rock", null, null, null],
	[null, null, null, null, null, null, null, null, null, "rock"],
	[null, null, "rock", null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	["rock", null, null, null, null, null, null, "rock", null, null],
	[null, null, null, null, "rock", null, null, null, null, null],
]


/* CARDINAL POINTS SCHEME

			 S

 E   grid    W

			 N
*/

// Rover Object Goes Here
// ======================

var rover1 = {
	name: "Rover 1",
	direction: "N",
	y: 0,
	x: 0,
	travelLog: []
}

var rover2 = {
	name: "Rover 2",
	direction: "W",
	y: 7,
	x: 9,
	travelLog: []
}

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
  	case "N":
  	rover.direction ="W";
  	break;
  	case"W":
  	rover.direction= "S";
  	break;
  	case "S":
  	rover.direction= "E";
  	break;
  	case "E":
  	rover.direction= "N";
  	break;
  }
  console.log(rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
  	case "N":
  	rover.direction ="E";
  	break;
  	case"E":
  	rover.direction= "S";
  	break;
  	case "S":
  	rover.direction= "W";
  	break;
  	case "W":
  	rover.direction= "N";
  	break;
  }
  console.log(rover.direction);
}

function moveForward(rover){
	console.log("moveForward was called");
  if(rover.direction === "N" && rover.y < 9){
  	rover.y += 1;
  }else if(rover.direction ==="S" && rover.y > 0){
  	rover.y -=1;
  }else if(rover.direction ==="W" && rover.x > 0){
  	rover.x -=1;
  }else if(rover.direction ==="E" && rover.x < 9){
  	rover.x +=1;
	}
	if(isObstacle(rover.x,rover.y)){
		if(rover.direction === "N"){
			rover.y -= 1;
		}else if(rover.direction ==="S"){
			rover.y +=1;
		}else if(rover.direction ==="W"){
			rover.x +=1;
		}else if(rover.direction ==="E"){
			rover.x -=1;
		}
	}else{
    console.log(rover.travelLog[rover.travelLog.length-1]);
		console.log([rover.y,rover.x]);
		if(rover.travelLog[rover.travelLog.length-1] !== [rover.y,rover.x]){
      console.log("se añade");
			rover.travelLog.push([rover.y,rover.x]);
		}
	}
}

function moveBackward(rover){
  console.log("moveBackward was called");
  if(rover.direction === "N" && rover.y > 0){
  	rover.y -= 1;
  }else if(rover.direction ==="S" && rover.y < 9){
  	rover.y +=1;
  }else if(rover.direction ==="W" && rover.x < 9){
  	rover.x +=1;
  }else if(rover.direction ==="E" && rover.x > 0){
  	rover.x -=1;
	}
	if(isObstacle(rover.x,rover.y)){
		if(rover.direction === "N"){
			rover.y += 1;
		}else if(rover.direction ==="S"){
			rover.y -=1;
		}else if(rover.direction ==="W"){
			rover.x -=1;
		}else if(rover.direction ==="E"){
			rover.x +=1;
		}
	}else{
    console.log(rover.travelLog[rover.travelLog.length-1]);
		console.log([rover.y,rover.x]);
		if(rover.travelLog[rover.travelLog.length-1] !== [rover.y,rover.x]){
			console.log("se añade");
			rover.travelLog.push([rover.y,rover.x]);
		}
	}
}

function displayTravelLog(rover){
	var message = "";
	for(var i= 0; i < rover.travelLog.length; i++){
		message += "[" + rover.travelLog[i] + "], ";
	}
	console.log("Travel Log - "+ rover.name +" has been in positions: " + message.slice(0,-2));
}

function displayPosition(rover){
	console.log(rover.name +" position: [" + [rover.y,rover.x]+ "]");
}

function isObstacle(x,y){
	if(grid[y][x] !== null ){
		console.log("Obstacle - There is a "+ grid[y][x] +" on the way!");
		return true;
	}
	return false;
}

function commands(rover, string){
	for(var i= 0; i < string.length; i++){
		if(string[i] ==="r"){
			turnRight(rover);
		}else if(string[i] ==="l"){
			turnLeft(rover);
		}else if(string[i] ==="f"){
			moveForward(rover);
		}else if(string[i] === "b"){
			moveBackward(rover);
		}else{
			console.log(string[i]+ " is not a valid command!")
		}
	}
	displayTravelLog(rover);
	displayPosition(rover);
	grid[rover.y][rover.x]= rover.name;
}

commands(rover1, "ffbbrrxxffffff");