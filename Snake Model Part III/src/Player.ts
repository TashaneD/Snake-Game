import SnakeController from "./SnakeController";
import WorldModel from "./WorldModel";
import Snake from "./Snake";

/* The Player class is an abstract class that is used to create different types of players*/
abstract class Player {
  sc: SnakeController;
  //Passes the snakeController into the player that allows them to control the snake
  constructor(snakeController: SnakeController) {
    this.sc = snakeController;
  }
  //Every player must have a makeTurn method
  abstract makeTurn(): void;
}
export default Player;
