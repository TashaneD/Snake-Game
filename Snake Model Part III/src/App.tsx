import "./App.css";
import { useEffect } from "react";
import Display from "./Display";
import display from "./display";
import Car from "./Car";
import Duck from "./Duck";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from "./point";
import Quacker from "./Quacker";

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

    // Turn the snake to the Right
    snake.turnRight();
    display(
      "Position after turning right:",
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
    const world = new WorldModel(snake, 10, 10);

    // Update the world by moving the snake forward by 2 squares
    world.update(3);
    display(
      "Position after moving forward by 3 squares:",
      world.snake.position.xcoordinate,
      ",",
      world.snake.position.ycoordinate,
    ); //Using the world class to update the current movement of the snake, also can be
    //used to access snake position when the game gets more complex
    /*
    const quacker1 = new Quacker(1);
    const quacker2 = new Quacker(2);
    const duck1 = new Duck("Blue", quacker1);
    const duck2 = new Duck("Red", quacker2);
    duck1.q = quacker1;
    duck2.q = quacker2;

    display(
      "The quack type of the",
      duck1.color,
      "duck is:",
      duck1.q.typeQuack,
    );
    duck1.quack(2);

    duck1.q = quacker2;

    display(
      "The quack type of the",
      duck1.color,
      "duck is:",
      duck1.q.typeQuack,
    );
    duck1.quack(2);*/
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}
