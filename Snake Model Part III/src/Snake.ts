// import display from "./display";
import Point from "./point";

/* The snake class is in charge of moving the snake based on the direction
the snake is facing, then gets the current position of the snake after the move*/

class Snake {
  private currentPosition: Point; //sets position type to a point
  private currentDirection: number; //sets direction type to number

  constructor() {
    this.currentPosition = new Point(0, 0); // initializes current Position to be 0 for all new Snakes
    this.currentDirection = 1; // 1: Right, -1: Left, 0: up, 2: Down
  }

  //In charge of moving the snake and dtermining the number of the squares the snake is supposed to move
  public move(numSquares: number) {
    //if the snake is facing forward, increase x coordinate by num of squares
    if (this.currentDirection === 1) {
      this.currentPosition = new Point(
        this.currentPosition.xcoordinate + numSquares,
        this.currentPosition.ycoordinate,
      );
      //if the snake is facing backward, decrease x coordinate by num of squares
    } else if (this.currentDirection === -1) {
      this.currentPosition = new Point(
        this.currentPosition.xcoordinate - numSquares,
        this.currentPosition.ycoordinate,
      );
      // If snake is facing up, increase y coordinate by num of squares
    } else if (this.currentDirection === 0) {
      this.currentPosition = new Point(
        this.currentPosition.xcoordinate,
        this.currentPosition.ycoordinate + numSquares,
      );
      // If snake is facing down, decrease y coordinate by num of squares
    } else if (this.currentDirection === 2) {
      this.currentPosition = new Point(
        this.currentPosition.xcoordinate,
        this.currentPosition.ycoordinate - numSquares,
      );
    }
  }
  /**
   * @deprecated use turnLeft() or turnRight()
   */
  public turn(): void {
    //creates a turn method
    if (this.currentDirection === 1) {
      //if the snake is currently facing forward
      this.currentDirection = -1; //set the direction of the snake to be backward, therefore changing the direction of the snake
    } else {
      this.currentDirection = 1;
    }
  }
  // Turns snake to the left based on the current direction that the snake may be facing
  public turnLeft(): void {
    if (this.currentDirection === 1) {
      this.currentDirection = 0;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 2;
    } else if (this.currentDirection === 0) {
      this.currentDirection = -1;
    } else if (this.currentDirection === 2) {
      this.currentDirection = 1;
    }
  }
  // Turns snake to the right based on the current direction that the snake may be facing
  public turnRight(): void {
    if (this.currentDirection === 1) {
      this.currentDirection = 2;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 0;
    } else if (this.currentDirection === 0) {
      this.currentDirection = 1;
    } else if (this.currentDirection === 2) {
      this.currentDirection = 1;
    }
  }
  //Gets the current position of the snake
  public get position() {
    return this.currentPosition;
  }
  public get direction() {
    return this.currentDirection;
  }
}

export default Snake;
