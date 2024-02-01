import Snake from "./Snake";

class WorldModel {
  private _snake: Snake;
  public width: number;
  public height: number;

  constructor(snake: Snake, worldWidth: number, worldHeight: number) {
    this._snake = snake;
    this.width = worldWidth;
    this.height = worldHeight;
  }
  //updates the worldmodel by the number of steps to move
  public update(steps: number): void {
    this._snake.move(steps);
  }

  public get snake(): Snake {
    return this._snake;
  }
  public get Width(): number {
    return this.width;
  }
  public get Height(): number {
    return this.height;
  }
}

export default WorldModel;
