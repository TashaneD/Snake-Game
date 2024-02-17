import CanvasWorldView from "./CanvasWorldView";
import WorldModel from "./WorldModel";
import Snake from "./Snake";

describe("CanvasWorldView", () => {
  it("renders world model correctly", () => {
    // Setup
    const snake = new Snake();
    const scalingFactor = 20;
    const worldModel = new WorldModel(snake, 10, 10);
    const canvasWorldView = new CanvasWorldView(scalingFactor);

    // Set the world view of the world model to canvasWorldView
    worldModel.setview(canvasWorldView);

    // Render canvas onto the DOM
    document.body.appendChild(canvasWorldView.worldcanvas);

    // Access canvas context
    const context = canvasWorldView.context1;

    // Perform assertions on the canvas context
    expect(context.canvas.width).toBe(worldModel.width * scalingFactor);
    expect(context.canvas.height).toBe(worldModel.height * scalingFactor);
    // Add more assertions as needed for the specific rendering of the world model
  });
});
