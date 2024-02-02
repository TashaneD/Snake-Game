import SnakeController from "./SnakeController";
import WorldModel from "./WorldModel";
import Snake from "./Snake";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import display from "./display";

describe("AvoidWallsPlayer", () => {
  it("Should turn a direction when snake is at a wall", () => {
    const snake = new Snake();
    // Create a WorldModel with the snake
    const world = new WorldModel(snake, 10, 10);
    const snakeController = new SnakeController(world, snake);
    // Update the world by moving the snake forward by 2 squares
    snakeController.world.update(10);
    expect(snakeController.snakePosition.xcoordinate).toBe(10);
    expect(snakeController.snakePosition.ycoordinate).toBe(0);
    const avoidWallsPlayer = new AvoidWallsPlayer(snakeController);
    avoidWallsPlayer.makeTurn();
    expect(snakeController.snakeDirection).toBe(2);
    snakeController.world.update(10);
    avoidWallsPlayer.makeTurn();
    expect(snakeController.snakeDirection).toBe(-1);
    snakeController.world.update(10);
    avoidWallsPlayer.makeTurn();
    expect(snakeController.snakeDirection).toBe(0);
    snakeController.world.update(10);
    expect(snakeController.snakePosition.xcoordinate).toBe(0);
    expect(snakeController.snakePosition.ycoordinate).toBe(0);

    // Spy on the turnSnakeRight method

    //expect(spyTurnSnakeRight).toHaveBeenCalled();
  });
  /*
  it("should turn left when snake is at the right edge and moving upwards", () => {
    const snake = new Snake();
    const worldModel = new WorldModel(snake, 20, 20);
    const snakeController = new SnakeController(worldModel, snake);

    // Spy on the turnSnakeLeft method
    const spyTurnSnakeLeft = jest.spyOn(snakeController, "turnSnakeLeft");

    const avoidWallsPlayer = new AvoidWallsPlayer(snakeController);
    avoidWallsPlayer.makeTurn();

    // Assert that the spy has been called
    expect(spyTurnSnakeLeft).toHaveBeenCalled();
  });*/

  // Add more test cases for other scenarios (bottom edge, left edge moving downwards, etc.)
});
