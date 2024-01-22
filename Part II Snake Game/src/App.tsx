import "./App.css";
import { useEffect } from "react";
import Display from "./Display";
import display from "./display";
import Car from "./Car";
import Duck from "./Duck";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from "./point";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    //display("hey");
    const snake = new Snake();

    // Display the initial position of the snake
    display(
      "Initial Position:",
      snake.position.xcoordinate,
      ",",
      snake.position.ycoordinate,
    );

    // Move the snake forward by 5 squares
    snake.move(5);
    display(
      "Position after moving forward by 5 squares:",
      snake.position.xcoordinate,
      ",",
      snake.position.ycoordinate,
    );

    // Turn the snake to the left
    snake.turnLeft();
    display(
      "Position after turning left:",
      snake.position.xcoordinate,
      ",",
      snake.position.ycoordinate,
    );

    // Move the snake forward by 3 squares
    snake.move(3);
    display(
      "Position after moving forward by 3 squares:",
      snake.position.xcoordinate,
      ",",
      snake.position.ycoordinate,
    );

    // Create a WorldModel with the snake
    const world = new WorldModel(snake);

    // Update the world by moving the snake forward by 2 squares
    world.update(2);
    display(
      "Position after moving forward by 2 squares:",
      world.snake.position.xcoordinate,
      world.snake.position.ycoordinate,
    );

    /**
    const redCar = new Car("red");
    const blueCar = new Car("blue");
    redCar.drive(40);
    blueCar.drive(5);
    redCar.drive(25);
    display("Red car drove a total of:", redCar.miles, "miles");
    display("Blue car drove a total of:", blueCar.miles, "miles");
    const redDuck = new Duck("red");
    const blueDuck = new Duck("blue");
    redDuck.quack(7);
    blueDuck.quack(2);
    redDuck.quack(1);
    display("The red duck quacked a total of:", redDuck.quackcount, "times");
    display("The blue duck quacked a total of:", blueDuck.quackcount, "times");
    redCar.miles = 90;
    redCar.drive(20);
    redCar.miles = -95;

    //initializes the snake
    const snake = new Snake(); //creates a new instance of snake class
    display("Starting Position:", snake.position); //show snake position from get
    snake.move(2); //moves snake 2 places
    display("Position after moving 2 squares:", snake.position);
    //snake.turn(); //Change direction of snake
    snake.move(5); // move 5 places in the direction facing
    display("Position after turning and going back 5 squares:", snake.position);
    //snake.turn();
    snake.move(10);
    display(
      "Position after turning forward again and moving 10 places:",
      snake.position,
    ); 
    const snake = new Snake();
    const worldModel = new WorldModel(snake);*/
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}
