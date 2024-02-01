import Snake from "./Snake";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";

describe("SnakeController", () => {
  it("should initialize with the correct world and snake", () => {
    const snake = new Snake();
    const worldModel = new WorldModel(snake, 20, 20); // Assuming canvas size is 20x20

    const snakeController = new SnakeController(worldModel, snake);

    expect(snakeController.world).toBe(worldModel);
    expect(snakeController.snakePosition).toEqual(snake.position);
    expect(snakeController.snakeDirection).toEqual(snake.direction);
  });

  it("Turns the snake in series of different directions to make sure it updates correctly based on the direction it is facing", () => {
    const snake = new Snake();
    const worldModel = new WorldModel(snake, 20, 20); // Assuming canvas size is 20x20
    const snakeController = new SnakeController(worldModel, snake);

    snakeController.turnSnakeRight(); // Turns the snake to right based on the current direction which is forward
    expect(snake.direction).toEqual(2); // Assert that the snake turned right
    snakeController.turnSnakeRight(); // Turns the snake to right based on the current direction which is down
    expect(snake.direction).toEqual(1); // Assuming direction is updated to face forward again
    snakeController.turnSnakeLeft(); //Turns the snake to the left after facing forward
    expect(snake.direction).toEqual(0); // Assert that snake is facing up
    snakeController.turnSnakeLeft(); // Turns the snake to the left based on the current direction which is upd
    expect(snake.direction).toEqual(-1); //Assert that snake is facing backward after turning left
    snakeController.turnSnakeRight();
    expect(snake.direction).toEqual(0);
  });
  // Add more test cases as needed, e.g., for getting snake position, getting world, etc.
});
