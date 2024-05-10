import IPlayer from "./IPlayer";
import SnakeController from "./SnakeController";
import IInputHandler from "./IInputHandler";
import Player from "./Player"

//Responsible for determining what inputs the human player does and turning snake accordingly
class HumanPlayer extends Player {
  private IInputHandler: IInputHandler;

  constructor(SnakeController: SnakeController, IInputHandler: IInputHandler) {
    super(SnakeController)
    this.IInputHandler = IInputHandler;
  }
//Respnonsible for checking if there was an input from the user, based on the input, turn the snake in that direction
  makeTurn(): void {
    if (this.IInputHandler.madeLeftMove() === true) {
      this.sc.turnSnakeLeft();
      this.IInputHandler.resetLeftMove();
    } else if (this.IInputHandler.madeRightMove() === true) {
      this.sc.turnSnakeRight();
      this.IInputHandler.resetRightMove();
    }
  }
}

export default HumanPlayer;
