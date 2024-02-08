import Snake from "./Snake";

class WorldModel {
  private _snake: Snake;
  private _width: number;
  private _height: number;

  constructor(snake: Snake, worldWidth: number, worldHeight: number) {
    this._snake = snake;
    this._width = worldWidth;
    this._height = worldHeight;
  }
  //updates the worldmodel by the number of steps to move
  public update(steps: number): void {
    this._snake.move(steps);
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
}

export default WorldModel;
