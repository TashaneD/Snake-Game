/*The point class represents a point in 2D space and has x and y coordinates */
class Point {
  public _x: number; //sets x and y type to number
  public _y: number; //sets x and y type to number

  //Initializes x and y in the constructor
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  //Checks whether a point is equal to the point of another object
  equals(p: Point) {
    return this._x === p.x && this._y === p.y;
  }
  //Gets the x and returns the current x
  public get x() {
    return this._x;
  }
  //Gets the y and returns the current y
  public get y() {
    return this._y;
  }
}
export default Point;
