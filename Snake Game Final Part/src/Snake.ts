// import display from "./display";
import { start } from "repl";
import Point from "./point";
import ICollidable from "./ICollidable";

/* The snake class is in charge of moving the snake based on the direction
the snake is facing, then gets the current position of the snake after the move*/

class Snake implements ICollidable {
  private currentParts: Point[]; //sets position type to a point
  private currentDirection: number; //sets direction type to number
  private startPosition: Point;
  private size: number;
  private isCurrentlyActive = true;

  constructor(size: number) {
    this.size = size;
    this.startPosition = new Point(this.size, 0);
    this.currentParts = [this.startPosition]; // initializes current Position to be 0 for all new Snakes
    this.currentDirection = 1; // 1: Right, -1: Left, 0: up, 2: Down
    this.isCurrentlyActive = true;

    for (let i = 1; i < this.size; i++) {
      if (this.currentDirection === 1) {
        this.currentParts.push(
          new Point(this.startPosition.x - i, this.startPosition.y),
        );
      } else if (this.currentDirection === -1) {
        this.currentParts.push(
          new Point(this.startPosition.x + i, this.startPosition.y),
        );
      } else if (this.currentDirection === 0) {
        this.currentParts.push(
          new Point(this.startPosition.x, this.startPosition.y + i),
        );
      } else if (this.currentDirection === 2) {
        this.currentParts.push(
          new Point(this.startPosition.x, this.startPosition.y - i),
        );
      }
    }
  }
  public update(): void {
    this.move(1);
  }

  die() {
    this.isCurrentlyActive = false;
  }
  //In charge of moving the snake and dtermining the number of the squares the snake is supposed to move
  public move(numSquares: number) {
    //if the snake is facing forward, increase x coordinate by num of squares

    //In order to move the tail
    for (let i = this.currentParts.length - 1; i > 0; i--) {
      this.currentParts[i] = this.currentParts[i - 1];
    }
    //Move the head based on the direction the snake is facing
    if (this.currentDirection === 1) {
      this.currentParts[0] = new Point(
        this.currentParts[0].x + numSquares,
        this.currentParts[0].y,
      );
    } else if (this.currentDirection === -1) {
      this.currentParts[0] = new Point(
        this.currentParts[0].x - numSquares,
        this.currentParts[0].y,
      );
    } else if (this.currentDirection === 0) {
      this.currentParts[0] = new Point(
        this.currentParts[0].x,
        this.currentParts[0].y - numSquares,
      );
    } else if (this.currentDirection === 2) {
      this.currentParts[0] = new Point(
        this.currentParts[0].x,
        this.currentParts[0].y + numSquares,
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
      this.currentDirection = -1;
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
  //This function is responsible for testing whether or not an object collided with another
  didCollide(other: ICollidable): boolean {
    const tailParts = this.currentParts.slice(1);
    if (other === this) {
      return tailParts.some((part) => part.equals(this.currentParts[0])); //Tests if the snake collide wwith itself
    } else {
      return this.currentParts.some((part) =>
        part.equals(this.currentParts[0]),
      ); // Tests if snake collide with another object
    }
  }

  grow() {
    //if (this.currentDirection === 1) {
    //this.currentParts.append(0, 1);
    //}
  }

  //Returns the current position of the snake
  public get position() {
    return this.currentParts[0];
  }
  //Returns the current direction of the snake
  public get direction() {
    return this.currentDirection;
  }
  //Returns all the parts of the snake in the array
  public get parts() {
    return this.currentParts;
  }
  public get type() {
    return "snake";
  }
}

export default Snake;
