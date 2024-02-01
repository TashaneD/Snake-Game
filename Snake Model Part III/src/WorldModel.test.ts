import WorldModel from "./WorldModel";
import Snake from "./Snake";
import Point from "./point";

describe("WorldModel Tests", function () {
  it("updates Snake position after turning", () => {
    const snake = new Snake();
    const worldModel = new WorldModel(snake, 10, 10);

    // Call update method and instruct Snake to turn left
    worldModel.update(3);
    worldModel.snake.turnLeft();

    // Call update method again for snake to move
    worldModel.update(5);

    // Check if the Snake's position is as expected
    expect(worldModel.snake.position).toEqual(new Point(3, 5)); // Assuming Point is the class for coordinates
  });
});
