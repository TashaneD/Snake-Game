import IInputHandler from "./IInputHandler";
class LRKeyInputHandler implements IInputHandler {
  private wasLeftArrowPushed: boolean;
  private wasRightArrowPushed: boolean;

  constructor() {
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.wasLeftArrowPushed = true;
      } else if (event.key === "ArrowRight") {
        this.wasRightArrowPushed = true;
      }
    });
  }
  madeLeftMove(): boolean {
    return this.wasLeftArrowPushed;
  }
  madeRightMove(): boolean {
    return this.wasRightArrowPushed;
  }
  resetLeftMove() {
    this.wasLeftArrowPushed = false;
  }
  resetRightMove() {
    this.wasRightArrowPushed = false;
  }
}

export default LRKeyInputHandler;
