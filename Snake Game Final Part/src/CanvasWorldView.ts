import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";
import Snake from "./Snake";

//Responsible for everything that is being displayed on the canvas
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

  //Responsible for displaying the world model and the scaling of the world mdoel, as well as the snakes in the worldmodel
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
    //Iterates through every snake in the allSnakes array as well as there parts and scales them
    for (let i = 0; i < model.allSnakes.length; i++) {
      const snake = model.allSnakes[i];
      const parts = snake.parts; // Get all parts of the snake
      this.context.fillStyle = "red"; // Set snake color
      for (let j = 0; j < parts.length; j++) {
        const part = parts[j];
        this.context.fillRect(
          part.x * this.scalingFactor,
          part.y * this.scalingFactor,
          this.scalingFactor,
          this.scalingFactor,
        );
      }
    }
    /*
    this.context.fillStyle = "purple";

    this.context.fillRect(
      model.allSnakes[0].position.x * this.scalingFactor,
      model.allSnakes[0].position.y * this.scalingFactor,
      1 * this.scalingFactor,
      1 * this.scalingFactor,
    );*/
  }

  public get context1(): CanvasRenderingContext2D {
    return this.context;
  }
  public get worldcanvas(): HTMLCanvasElement {
    return this.worldCanvas;
  }
}

export default CanvasWorldView;
