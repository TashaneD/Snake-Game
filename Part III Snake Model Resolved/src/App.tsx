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
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./AvoidWallsPlayer";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    const snake = new Snake();
    // Create a WorldModel with the snake
    const world = new WorldModel(snake, 10, 10);
    const snakeController = new SnakeController(world, snake);
    display(
      "The snake's initial position:",
      snake.position.x,
      ",",
      snake.position.y,
    );
    display("The snake's intitial direction:", snakeController.snakeDirection);
    world.update(10);
    display(
      "Snake's position after moving forward by 10 squares:",
      world.snake.position.x,
      ",",
      world.snake.position.y,
    );
    const avoidWallsPlayer = new AvoidWallsPlayer(snakeController, world);
    avoidWallsPlayer.makeTurn();
    display(
      "The snake's Direction after avoiding the right wall:",
      snakeController.snakeDirection,
    );
    world.update(10);
    display(
      "Snake's position after moving down by 10 squares:",
      snake.position.x,
      ",",
      snake.position.y,
    );
    avoidWallsPlayer.makeTurn();
    display(
      "The snake's direction after avoiding bottom wall:",
      snakeController.snakeDirection,
    );
    world.update(10);
    display(
      "Snake's position after moving left by 10 squares:",
      snake.position.x,
      ",",
      snake.position.y,
    );
    avoidWallsPlayer.makeTurn();
    display(
      "The snake's direction after avoiding left wall:",
      snakeController.snakeDirection,
    );
    world.update(10);
    display(
      "Snake's position after moving up by 10 squares:",
      snake.position.x,
      ",",
      snake.position.y,
    );
    display(world.width, world.height);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}

//display("hey");
/*const snake = new Snake();

    // Display the initial position of the snake
    display(
      "Initial Position:",
      snake.position.x,
      ",",
      snake.position.y,
    );

    // Move the snake forward by 5 squares
    snake.move(5);
    display(
      "Position after moving forward by 5 squares:",
      snake.position.x,
      ",",
      snake.position.y,
    );

    // Turn the snake to the Right
    snake.turnRight();
    display(
      "Position after turning right:",
      snake.position.x,
      ",",
      snake.position.y,
    );

    // Move the snake forward by 3 squares
    snake.move(3);
    display(
      "Position after moving forward by 3 squares:",
      snake.position.x,
      ",",
      snake.position.y,
    );*/
