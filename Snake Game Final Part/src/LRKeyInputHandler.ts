import IInputHandler from "./IInputHandler";

//Overall, this class is responsible for handling keyboard input specifically for left and right arrow keys and
//provides methods to query and reset the state of these inputs.
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
  //These functions are responsible for returning the keydown events based on what arrow was pushed
  madeLeftMove(): boolean {
    return this.wasLeftArrowPushed;
  }
  madeRightMove(): boolean {
    return this.wasRightArrowPushed;
  }

  //These functions are responsible for resetting the values back to false after being pressed
  resetLeftMove() {
    this.wasLeftArrowPushed = false;
  }
  resetRightMove() {
    this.wasRightArrowPushed = false;
  }
}

export default LRKeyInputHandler;
