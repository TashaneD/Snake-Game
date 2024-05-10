import Snake from "./Snake";
import IWorldView from "./IWorldView";
import display from "./display";

class WorldModel {
  private _allSnakes: Snake[];
  private _allViews: IWorldView[];
  private _width: number;
  private _height: number;
  //worldView: IWorldView | null;

  constructor(worldWidth: number, worldHeight: number) {
    this._allSnakes = [];
    this._allViews = [];
    this._width = worldWidth;
    this._height = worldHeight;
    //this.worldView = null;
  }
  //updates the worldmodel by the number of steps to move and checks whether snakes collide and push those snakes to collided snakes array
  public update(steps: number): void {
    const collidedSnakes = [];
    this.allSnakes.forEach((snake) => snake.move(steps));
    if (this._allViews) {
      this._allViews.forEach((view) => view.display(this));
    }
    if (this.allSnakes.some((s) => s.didCollide(s))) {
      collidedSnakes.push(this.allSnakes.find((s) => s.didCollide(s)));
    }
  }

  //Adds a snake into all snakes array
  public addSnake(s: Snake) {
    this.allSnakes.push(s);
  }

  //Adds a view to our allViews array
  public addView(v: IWorldView) {
    this._allViews.push(v);
  }

  //Returns all the snake in the allSnakes array
  public get allSnakes(): Snake[] {
    return this._allSnakes;
  }

  //Returns the width of the world
  public get width(): number {
    return this._width;
  }

  //Returns the height of the world
  public get height(): number {
    return this._height;
  }
}

export default WorldModel;
