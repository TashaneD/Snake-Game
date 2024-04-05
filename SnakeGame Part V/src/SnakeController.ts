import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from "./point";

//This class is used to controll the movement of the snake
class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;

  //Initializes snakeWorld and slitherer into the snakeController
  constructor(worldModel: WorldModel, snake: Snake) {
    this.snakeWorld = worldModel;
    this.slitherer = snake;
  }
  //In charge of turning the snake to the left
  public turnSnakeLeft(): void {
    this.slitherer.turnLeft();
  }
  //In charge of turning the snake to the right
  public turnSnakeRight(): void {
    this.slitherer.turnRight();
  }

  //gets the snake position
  public get snakePosition() {
    return this.slitherer.position;
  }

  //Gets the snake direction
  public get snakeDirection() {
    return this.slitherer.direction;
  }
  public get worldWidth() {
    return this.snakeWorld.width
  }
  public get worldHeight() {
    return this.snakeWorld.height;
  }
}
export default SnakeController;
