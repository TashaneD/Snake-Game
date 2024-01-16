import display from "./display";
// import IQuacker from "./IQuacker";
class Duck {
  public quackcount: number;
  public color: string;
  constructor(duckColor: string) {
    this.quackcount = 0;
    this.color = duckColor;
  }
  public quack(quacks: number) {
    display("The", this.color, "Duck goes Quack! Quack! Quack!");
    this.quackcount = this.quackcount + quacks;
  }
}
// place your code on line 5 above the export statement below

export default Duck;
