import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";
import Snake from "./Snake";

class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }
  display(model: WorldModel) {
    this.worldCanvas.width = model.width * this.scalingFactor;
    this.worldCanvas.height = model.height * this.scalingFactor;
    this.context.fillStyle = "black";
    this.context.clearRect(
      0,
      0,
      model.width * this.scalingFactor,
      model.height * this.scalingFactor,
    );
    this.context.fillRect(
      0,
      0,
      model.width * this.scalingFactor,
      model.height * this.scalingFactor,
    );
    this.context.fillStyle = "purple";
    this.context.fillRect(
      model.snake.position.x * this.scalingFactor,
      model.snake.position.y * this.scalingFactor,
      1 * this.scalingFactor,
      1 * this.scalingFactor,
    );
  }

  public get context1(): CanvasRenderingContext2D {
    return this.context;
  }
  public get worldcanvas(): HTMLCanvasElement {
    return this.worldCanvas;
  }
}

export default CanvasWorldView;
