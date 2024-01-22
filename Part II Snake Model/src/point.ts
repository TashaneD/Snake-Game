class Point {
  public xcoord: number; //sets xcoord and ycoord type to number
  public ycoord: number; //sets xcoord and ycoord type to number

  constructor(xcoord: number, ycoord: number) {
    this.xcoord = xcoord;
    this.ycoord = ycoord;
  }
  public get xcoordinate() {
    return this.xcoord;
  }
  public get ycoordinate() {
    return this.ycoord;
  }
}
export default Point;
