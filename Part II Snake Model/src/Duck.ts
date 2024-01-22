import display from "./display";
// import IQuacker from "./IQuacker";
/**
 * Create a Duck.
 * @param duckColor - The color of the Duck.
 */
class Duck {
  public quackcount: number;
  public color: string;
  constructor(duckColor: string) {
    this.quackcount = 0;
    this.color = duckColor;
  }
  /**
   *The Duck quacks for a number of quacks.
   @param quacks - The number of quacks
   */
  public quack(quacks: number) {
    display("The", this.color, "Duck goes Quack! Quack! Quack!");
    this.quackcount = this.quackcount + quacks;
  }
  toString() {
    return this.color + "Duck quacked for " + this.quackcount + " times";
  }
}
// place your code on line 5 above the export statement below

export default Duck;
