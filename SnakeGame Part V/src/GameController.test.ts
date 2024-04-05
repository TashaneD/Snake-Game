import GameController from "./GameController";
import WorldModel from "./WorldModel";
import Player from "./Player";
import HumanPlayer from "./HumanPlayer";
import SnakeController from "./SnakeController";
import Snake from "./Snake";
import LRKeyInputHandler from "./LRKeyInputHandler";
import AvoidWallsPlayer from "./AvoidWallsPlayer";

// Mock SnakeController
jest.mock("./SnakeController", () => {
  return jest.fn().mockImplementation(() => ({
    turnSnakeLeft: jest.fn(),
    turnSnakeRight: jest.fn(),
  }));
});

describe("GameController", () => {
  test("constructor initializes world and players correctly", () => {
    const snake = new Snake();
    const worldModelMock = new WorldModel(snake, 10, 10);
    const snakeController = new SnakeController(worldModelMock, snake);
    const player1Mock = new HumanPlayer(
      snakeController,
      new LRKeyInputHandler(),
    );
    const player2Mock = new AvoidWallsPlayer(snakeController);
    const gameController1 = new GameController(worldModelMock);
    expect(gameController1.world1).toBe(worldModelMock);
    expect(gameController1.player1).toBe(player1Mock);
    expect(gameController1.player2).toBe(player2Mock);
  });
  /*
  test("run method calls makeTurn for both players and updates world", () => {
    // Mock makeTurn method
    const makeTurnMock1 = jest.spyOn(player1Mock, "makeTurn");
    const makeTurnMock2 = jest.spyOn(player2Mock, "makeTurn");

    // Mock requestAnimationFrame
    global.requestAnimationFrame = jest.fn((callback) => {
      callback(100); // Simulate a frame update
    });

    gameController.run();

    // After first frame update, makeTurn should have been called for both players
    expect(makeTurnMock1).toHaveBeenCalledTimes(1);
    expect(makeTurnMock2).toHaveBeenCalledTimes(1);

    // After first frame update, world should have been updated
    expect(worldModelMock.update).toHaveBeenCalledWith(1);
  });
});*/
});
