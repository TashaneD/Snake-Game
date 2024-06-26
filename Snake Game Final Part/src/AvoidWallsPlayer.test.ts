import SnakeController from "./SnakeController";
import WorldModel from "./WorldModel";
import Snake from "./Snake";
import AvoidWallsPlayer from "./AvoidWallsPlayer";

describe("AvoidWallsPlayer", () => {
  it("Should turn a direction when snake is at a wall", () => {
    const snake = new Snake(3);
    // Create a WorldModel with the snake
    const world = new WorldModel(10, 10);
    const snakeController = new SnakeController(world, snake);
    const avoidWallsPlayer = new AvoidWallsPlayer(snakeController);

    world.update(9);
    expect(snakeController.snakePosition.x).toBe(9);
    expect(snakeController.snakePosition.y).toBe(0);
    avoidWallsPlayer.makeTurn();

    expect(snakeController.snakeDirection).toBe(2);
    world.update(10);
    expect(snakeController.snakePosition.x).toBe(10);
    expect(snakeController.snakePosition.y).toBe(10);
    avoidWallsPlayer.makeTurn();

    expect(snakeController.snakeDirection).toBe(-1);
    world.update(10);
    expect(snakeController.snakePosition.x).toBe(0);
    expect(snakeController.snakePosition.y).toBe(10);
    avoidWallsPlayer.makeTurn();

    expect(snakeController.snakeDirection).toBe(0);
    world.update(10);
    expect(snakeController.snakePosition.x).toBe(0);
    expect(snakeController.snakePosition.y).toBe(0);
    avoidWallsPlayer.makeTurn();
    expect(snakeController.snakeDirection).toBe(1);
  });
});
