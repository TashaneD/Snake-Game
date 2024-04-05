import Snake from "./Snake";
import IWorldView from "./IWorldView";
import display from "./display";

class WorldModel {
  private _snake: Snake;
  private _width: number;
  private _height: number;
  worldView: IWorldView | null;

  constructor(snake: Snake, worldWidth: number, worldHeight: number) {
    this._snake = snake;
    this._width = worldWidth;
    this._height = worldHeight;
    this.worldView = null;
  }
  //updates the worldmodel by the number of steps to move
  public update(steps: number): void {
    this._snake.move(steps);
    if (this.worldView !== null) {
      this.worldView.display(this);
    }
  }
  public get snake(): Snake {
    return this._snake;
  }
  public get width(): number {
    return this._width;
  }
  public get height(): number {
    return this._height;
  }
  public set view(worldview: IWorldView) {
    this.worldView = worldview;
  }
}

export default WorldModel;
