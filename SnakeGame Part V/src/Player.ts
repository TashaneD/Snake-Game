import SnakeController from "./SnakeController";

/* The Player class is an abstract class that is used to create different types of players*/
abstract class Player {
  protected sc: SnakeController;

  //Passes the snakeController into the player that allows them to control the snake
  constructor(snakeController: SnakeController) {
    this.sc = snakeController;
  }
  //Every player must have a makeTurn method
  abstract makeTurn(): void;
}
export default Player;
