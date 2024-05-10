import Player from "./Player";

/*This class is used to avoid walls the snake can't go through*/
class AvoidWallsPlayer extends Player {
  makeTurn(): void {
    const snakeDirection = this.sc.snakeDirection;
    const snakePosition = this.sc.snakePosition;
    const worldHeight = this.sc.worldHeight;
    const worldWidth = this.sc.worldWidth;
    // If the snake is moving backward and in the quadrant 1, turn the snake left to avoid left wall
    if (
      snakeDirection === -1 &&
      snakePosition.x === 0 &&
      snakePosition.y < worldHeight / 2
    ) {
      this.sc.turnSnakeLeft();
    }
    //If the snake is moving up and in quadrant 1, turn the snake right to avoid the top wall
    else if (
      snakeDirection === 0 &&
      snakePosition.x <= worldWidth / 2 &&
      snakePosition.y === 0
    ) {
      this.sc.turnSnakeRight();
    }
    //If the snake is moving forward, in quadrant 2, turn the snake to the right to avoid the right wall
    else if (
      snakeDirection === 1 &&
      snakePosition.x === worldWidth - 1 &&
      snakePosition.y < worldHeight / 2
    ) {
      this.sc.turnSnakeRight();
    }
    //If the snake is moving up, in quadrant 2, turn the snake to the left to avoid the top wall
    else if (
      snakeDirection === 0 &&
      snakePosition.x > worldWidth / 2 &&
      snakePosition.y === 0
    ) {
      this.sc.turnSnakeLeft();
    }
    //If the snake is moving backward and in quadrant 3, turn the snake right to avoid the left wall
    else if (
      snakeDirection === -1 &&
      snakePosition.x === 0 &&
      snakePosition.y >= worldHeight / 2
    ) {
      this.sc.turnSnakeRight();
    }
    //If the snake is moving down and in quadrant 3, turn the snake right to avoid bottom wall
    else if (
      snakeDirection === 2 &&
      snakePosition.x < worldWidth / 2 &&
      snakePosition.y === worldHeight - 1
    ) {
      this.sc.turnSnakeRight();
    }
    //If the snake is moving down and in quadrant 4, turn the snake left to avoid the bottom wall
    else if (
      snakeDirection === 2 &&
      snakePosition.x >= worldWidth / 2 &&
      snakePosition.y === worldHeight - 1
    ) {
      this.sc.turnSnakeLeft();
    }
    //If the snake is moving forward in quadrant 4 turn the snake left to avoid the right wall
    else if (
      snakeDirection === 1 &&
      snakePosition.x > worldWidth / 2 &&
      snakePosition.y === worldHeight
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      snakeDirection === 1 &&
      snakePosition.x === worldWidth - 1 &&
      snakePosition.y >= worldHeight / 2
    ) {
      this.sc.turnSnakeLeft();
    }
  }
}

export default AvoidWallsPlayer;
