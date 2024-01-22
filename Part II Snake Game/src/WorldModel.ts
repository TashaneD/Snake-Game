import Snake from "./Snake";

class WorldModel {
  private _snake: Snake;

  constructor(snake: Snake) {
    this._snake = snake;
  }
  //updates the worldmodel by the number of steps to move
  public update(steps: number): void {
    this._snake.move(steps);
  }

  public get snake(): Snake {
    return this._snake;
  }
}

export default WorldModel;
