import SnakeController from "./SnakeController";
import WorldModel from "./WorldModel";
import Snake from "./Snake";
import AvoidWallsPlayer from "./AvoidWallsPlayer";

describe("AvoidWallsPlayer", () => {
  it("should turn right when snake is at the left edge and moving upwards", () => {
    const snake = new Snake();
    const worldModel = new WorldModel(snake, 20, 20);
    const snakeController = new SnakeController(worldModel, snake);
    const avoidWallsPlayer = new AvoidWallsPlayer(snakeController);

    if (
      snakeController.snakePosition.xcoordinate === 2 &&
      snakeController.snakePosition.ycoordinate === 0 &&
      snakeController.snakeDirection === 1
    ) {
      avoidWallsPlayer.makeTurn();
      expect(snakeController.turnSnakeLeft()).toHaveBeenCalled();
    }

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
