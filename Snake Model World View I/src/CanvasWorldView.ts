import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";

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
  display(model: WorldModel): void {
    this.worldCanvas.width = model.width * this.scalingFactor;
    this.worldCanvas.height = model.height * this.scalingFactor;
    this.context.fillStyle = "red";
    this.context.clearRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height,
    );
    this.context.fillRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height,
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
