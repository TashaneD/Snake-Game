// place your code starting on line 2 above the export statement below
import display from "./display";

class Quacker {
  private quackType: number;

  constructor(quackType: number) {
    this.quackType = quackType;
  }

  public makeNoise() {
    if (this.quackType === 1) {
      display("Quackeroosky");
    } else if (this.quackType === 2) {
      display("Quack 22222222");
    } else if (this.quackType === 3) {
      display("Quack 3");
    } else if (this.quackType === 4) {
      display("Quack 4");
    }
  }
  public get typeQuack() {
    return this.quackType;
  }
  public set typeQuack(type: number) {
    this.quackType = type;
  }
}

export default Quacker;
