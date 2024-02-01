import Player from "./Player";
import SnakeController from "./SnakeController";
import Snake from "./Snake";

/*This class is used to avoid walls the snake can't go through*/
class AvoidWallsPlayer extends Player {
  constructor(snakerController: SnakeController) {
    super(snakerController);
  }
  //Used to make the snake turn to avoid walls
  makeTurn(): void {
    const snakeDirection = this.sc.snakeDirection;
    const snakePosition = this.sc.snakePosition;
    const worldHeight = this.sc.world.height;
    const worldWidth = this.sc.world.width;
    //If the snake is facing backward, x = 0 and y < worldHeight (left wall), turn the snake left to avoid wall
    if (
      snakeDirection === -1 &&
      snakePosition.xcoordinate === 0 &&
      snakePosition.ycoordinate < worldHeight
    ) {
      this.sc.turnSnakeLeft();
    }
      //if the snake is facing forward and by right wall, turn snake right to avoid the wall
     else if (
      snakeDirection === 1 &&
      snakePosition.xcoordinate === worldWidth - 1 &&
      snakePosition.ycoordinate < worldHeight
    ) {
      this.sc.turnSnakeRight();
    }
      //If the snake is facing up and by the top wall, turn the snake left to avoid wall
     else if (
      snakeDirection === 0 &&
      snakePosition.xcoordinate < worldWidth &&
      snakePosition.ycoordinate === 0
    ) {
      this.sc.turnSnakeLeft();
    }
      //If the snake is facing down and by the lower wall, turn the snake right to avoid wall
     else if (
      snakeDirection === 2 &&
      snakePosition.xcoordinate < worldWidth &&
      snakePosition.ycoordinate === worldHeight - 1
    ) {
      this.sc.turnSnakeRight();
    }
      //If the snake is facing forward and by bottom right edge turn the snake right to avoid wall
     else if (
      snakeDirection === 1 &&
      snakePosition.xcoordinate === worldWidth - 1 &&
      snakePosition.ycoordinate === worldHeight - 1
    ) {
      this.sc.turnSnakeLeft();
    }
    else if (
      snakeDirection === 2 &&
      snakePosition.xcoordinate === worldWidth - 1 &&
      snakePosition.ycoordinate === worldHeight - 1
    ) {
      this.sc.turnSnakeRight();
    }
    //If the snake is facing backward and by the bottom left edge, turn the snake right to avoid the wall
     else if (
      snakeDirection === -1 &&
      snakePosition.xcoordinate === 0 &&
      snakePosition.ycoordinate === worldHeight -1
    ) {
      this.sc.turnSnakeRight();
    } 
    //If the snake is facing up and at the top left edge, turn the snake right to avoid the wall
    else if (
      snakeDirection === 0 &&
      snakePosition.xcoordinate === 1 &&
      snakePosition.ycoordinate === 1
    ) {
      this.sc.turnSnakeRight();
    }
    //If the snake is facing backward and at the top left edge, turn the snake right to avoid the wall
    else if (
      snakeDirection === -1 &&
      snakePosition.xcoordinate === 1 &&
      snakePosition.ycoordinate === 1
    ) {
      this.sc.turnSnakeRight();
    }  
    //If the snake is facing up and by the top right edge, turn the snake left to avoid wall
    else if (
      snakeDirection === 0 &&
      snakePosition.xcoordinate === worldWidth -1 &&
      snakePosition.ycoordinate === 0
    ) {
      this.sc.turnSnakeLeft();
    }
    //If the snake is facing forward and by the top right edge, turn the snake left to avoid wall
    else if (
      snakeDirection === 1 &&
      snakePosition.xcoordinate === worldWidth -1 &&
      snakePosition.ycoordinate === 0
    ) {
      this.sc.turnSnakeRight();
    }

  }
}

export default AvoidWallsPlayer;
