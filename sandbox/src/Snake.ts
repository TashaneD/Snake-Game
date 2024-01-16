// import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number; //sets position type to number
  private currentDirection: number; //sets direction type to number
  constructor() {
    this.currentPosition = 0; // initializes current Position to be 0 for all new Snakes
    this.currentDirection = 1; // Initializes the direction of all new snakes which is forward since 1 is forwards and -1 is backwards
  }
  public move(numSquares: number) {
    //creates method for moving the snake, uses numSquares to determine how many squares
    if (this.currentDirection === 1) {
      //if the snake is facing forward
      this.currentPosition += numSquares; // increase the currentPosition of the snake by the number of Squares defined by numSquares
    } else {
      this.currentPosition -= numSquares; //if snake is not facing forward, decrease the currentPosition by the number of squares, since it is facing backward
    }
  }
  public turn() {
    //creates a turn method
    if (this.currentDirection === 1) {
      //if the snake is currently facing forward
      this.currentDirection = -1; //set the direction of the snake to be backward, therefore changing the direction of the snake
    } else {
      this.currentDirection = 1;
    }
  }
  public get position() {
    return this.currentPosition;
  }
}

export default Snake;
