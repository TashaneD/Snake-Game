import Point from "./point"; // Adjust the import path based on your project structure

describe("Point Class Tests", () => {
  it("should create a Point object with the specified coordinates", () => {
    const point = new Point(1, 2);
    expect(point.xcoordinate).toBe(1);
    expect(point.ycoordinate).toBe(2);
  });

  it("should return the correct x and y coordinates", () => {
    const point = new Point(3, 4);
    expect(point.xcoordinate).toBe(3);
    expect(point.ycoordinate).toBe(4);
  });

  it("should handle negative coordinates", () => {
    const point = new Point(-1, -5);
    expect(point.xcoordinate).toBe(-1);
    expect(point.ycoordinate).toBe(-5);
  });

  // Add more tests as needed based on the expected behavior of your Point class
});
export {};
