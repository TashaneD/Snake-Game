import display from "./display";
import Quacker from "./Quacker";
/**
 * Create a Duck.
 * @param duckColor - The color of the Duck.
 */
class Duck {
  public quackcount: number;
  public color: string;
  public q: Quacker;

  constructor(duckColor: string, q: Quacker) {
    this.quackcount = 0;
    this.color = duckColor;
    this.q = q;
    //this.q = new Quacker(Math.floor(4 * Math.random()));
  }
  /**
   *The Duck quacks for a number of quacks.
   @param quacks - The number of quacks
   */
  public quack(quacks: number) {
    display("The", this.color, "Duck goes Quack! Quack! Quack!");
    this.quackcount = this.quackcount + quacks;
    this.q.makeNoise();
  }
  toString() {
    return this.color + "Duck quacked for " + this.quackcount + " times";
  }
}
// place your code on line 5 above the export statement below

export default Duck;
