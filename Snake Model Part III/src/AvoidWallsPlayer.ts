import Player from "./Player";
import SnakeController from "./SnakeController";
import Snake from "./Snake";

/*This class is used to avoid walls the snake can't go through*/
class AvoidWallsPlayer extends Player {
  constructor(snakeController: SnakeController) {
    super(snakeController);
  }
  //Used to make the snake turn to avoid walls
  makeTurn(): void {
    const snakeDirection = this.sc.snakeDirection;
    const snakePosition = this.sc.snakePosition;
    const worldHeight = this.sc.world.height;
    const worldWidth = this.sc.world.width;
    // If the snake is moving backward and in the quadrant 1, turn the snake left to avoid left wall
    if (
      snakeDirection === -1 &&
      snakePosition.xcoordinate === 0 &&
      snakePosition.ycoordinate < worldHeight / 2
    ) {
      this.sc.turnSnakeLeft();
    }
    //If the snake is moving up and in quadrant 1, turn the snake right to avoid the top wall
    else if (
      snakeDirection === 0 &&
      snakePosition.xcoordinate < worldWidth / 2 &&
      snakePosition.ycoordinate === 0
    ) {
      this.sc.turnSnakeRight();
    }
    //If the snake is moving forward, in quadrant 2, turn the snake to the right to avoid the right wall
    else if (
      snakeDirection === 1 &&
      snakePosition.xcoordinate === worldWidth &&
      snakePosition.ycoordinate < worldHeight / 2
    ) {
      this.sc.turnSnakeRight();
    }
    //If the snake is moving up, in quadrant 2, turn the snake to the left to avoid the top wall
    else if (
      snakeDirection === 0 &&
      snakePosition.xcoordinate > worldWidth / 2 &&
      snakePosition.ycoordinate === 0
    ) {
      this.sc.turnSnakeLeft();
    }
    //If the snake is moving backward and in quadrant 3, turn the snake right to avoid the left wall
    else if (
      snakeDirection === -1 &&
      snakePosition.xcoordinate === 0 &&
      snakePosition.ycoordinate > worldHeight / 2
    ) {
      this.sc.turnSnakeRight();
    }
    //If the snake is moving down and in quadrant 3, turn the snake right to avoid bottom wall
    else if (
      snakeDirection === 2 &&
      snakePosition.xcoordinate < worldWidth / 2 &&
      snakePosition.ycoordinate === worldHeight
    ) {
      this.sc.turnSnakeRight();
    }
    //If the snake is moving down and in quadrant 4, turn the snake left to avoid the bottom wall
    else if (
      snakeDirection === 2 &&
      snakePosition.xcoordinate > worldWidth / 2 &&
      snakePosition.ycoordinate === worldHeight
    ) {
      this.sc.turnSnakeLeft();
    }
    //If the snake is moving forward in quadrant 4 turn the snake left to avoid the right wall
    else if (
      snakeDirection === 1 &&
      snakePosition.xcoordinate > worldWidth / 2 &&
      snakePosition.ycoordinate === worldHeight
    ) {
      this.sc.turnSnakeLeft();
    }
  }
}

export default AvoidWallsPlayer;
