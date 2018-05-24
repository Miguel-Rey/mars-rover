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
	[null, null, null, null, "rock", null, null, null, null, null]
]

// Rover Object Goes Here
// ======================

var rover = {
	direction: "N",
	x: 0,
	y: 0,
	travelLog: [],
	position: [0,0]
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
  if(rover.direction === "N" && rover.y > 0){
  	rover.y -= 1;
  }else if(rover.direction ==="S" && rover.y < 10){
  	rover.y +=1;
  }else if(rover.direction ==="W" && rover.x > 0){
  	rover.x -=1;
  }else if(rover.direction ==="E" && rover.x < 10){
  	rover.x +=1;
	}
	rover.travelLog.push([rover.x,rover.y]);
}

function moveBackward(rover){
  console.log("moveBackward was called");
  if(rover.direction === "N" && rover.y < 10){
  	rover.y += 1;
  }else if(rover.direction ==="S" && rover.y > 0){
  	rover.y -=1;
  }else if(rover.direction ==="W" && rover.x < 10){
  	rover.x +=1;
  }else if(rover.direction ==="E" && rover.x > 0){
  	rover.x -=1;
	}
	rover.travelLog.push([rover.x,rover.y]);
}

function displayTravelLog(rover){
	var message = "";
	for(var i= 0; i < rover.travelLog.length; i++){
		message += "[" + rover.travelLog[i] + "], ";
	}
	console.log("Travel Log - Rover has been in positions: " + message.slice(0,-2));
}

function displayPosition(rover){
	console.log("Rover position: [" + [rover.x,rover.y]+ "]");
}

function commands(string){
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
}

commands("rfffrfff");