import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from "./point";

const moveSnakes = (times: number, turn: boolean = false) => {
  const greenSnake = new Snake(4);
  const maroonSnake = new Snake(3);
  let gtotalSquaresx = 0;
  let gtotalSquaresy = 0;
  let mtotalSquaresx = 0;
  let mtotalSquaresy = 0;

  for (let i = 0; i < times; i++) {
    const numSquares1 = Math.floor(Math.random() * 100);
    const numSquares2 = Math.floor(Math.random() * 100);

    greenSnake.move(numSquares1);
    maroonSnake.move(numSquares2);
    greenSnake.move(5);
    gtotalSquaresx += numSquares1 + 5;
    mtotalSquaresx += numSquares2;

    if (turn) {
      const numSquares3 = Math.floor(Math.random() * 10);
      const numSquares4 = Math.floor(Math.random() * 10);

      greenSnake.turnLeft();
      maroonSnake.turnLeft();
      maroonSnake.move(numSquares3);
      mtotalSquaresy += numSquares3;
      greenSnake.move(numSquares4);
      gtotalSquaresy += numSquares4;
      maroonSnake.turnRight();
      maroonSnake.turnRight();
      maroonSnake.turnRight();
      mtotalSquaresx += numSquares3;
      maroonSnake.move(numSquares3);
      greenSnake.move(numSquares4);
      gtotalSquaresy += numSquares4;
    }
  }

  return {
    actual: greenSnake.position,
    expected: new Point(gtotalSquaresx, gtotalSquaresy),
  };
};
//Creates test cases for the snake
describe("Snake Tests", function () {
  const tests = [0, 3, 10].map((num, index) => moveSnakes(num, index > 2));

  const testDescriptions = [
    "starts with the correct position of 0",
    "has the correct position after 3+ random moves",
    "has the correct position after 10+ random moves",
  ];
  // For each test, check to make sure that the x coordinate is equal to the expected and y coordinate is equal to the expected
  testDescriptions.forEach((description, index) => {
    it(description, () => {
      expect(tests[index].actual.x).toBe(tests[index].expected.x);
      expect(tests[index].actual.y).toBe(tests[index].expected.y);
    });
  });
});

describe("Addition", function () {
  it("sums numbers", () => {
    expect(1 + 1).toEqual(2);
  });
});

export {};
