import IActor from "./IActor";
import Point from "./point";

//Food class is responsible for the food that will be consumed by the snakes
class Food implements IActor {
  public currentPosition: Point;
  public isCurrentlyActive: boolean;

  constructor(x: number, y: number) {
    this.currentPosition = new Point(0, 0);
    this.isCurrentlyActive = true;
  }

  eat() {
    this.isCurrentlyActive = false;
  }

  update(): void {}

  //Returns the current position of the food
  public get position(): Point {
    return this.currentPosition;
  }

  //Returns whether or not the food is still active or not
  public get isActive(): boolean {
    return this.isCurrentlyActive;
  }

  public get type(): string {
    return "Food";
  }
}
export default Food;
