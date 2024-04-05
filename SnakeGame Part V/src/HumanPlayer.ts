import IPlayer from "./IPlayer";
import SnakeController from "./SnakeController";
import IInputHandler from "./IInputHandler";

class HumanPlayer implements IPlayer {
  private sc: SnakeController;
  private IInputHandler: IInputHandler;

  constructor(SnakeController: SnakeController, IInputHandler: IInputHandler) {
    this.sc = SnakeController;
    this.IInputHandler = IInputHandler;
  }

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
