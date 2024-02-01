/*The point class represents a point in 2D space and has x and y coordinates */
class Point {
  public x: number; //sets x and y type to number
  public y: number; //sets x and y type to number

  //Initializes x and y in the constructor
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  //Gets the xcoordinate and returns the current x
  public get xcoordinate() {
    return this.x;
  }
  //Gets the ycoordinate and returns the current y
  public get ycoordinate() {
    return this.y;
  }
}
export default Point;
