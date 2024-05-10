import WorldModel from "./WorldModel";
import Player from "./Player";

class GameController {
  private world: WorldModel;
  private _player1: Player | null;
  private _player2: Player | null;

  constructor(world: WorldModel, _player1: Player, _player2: Player) {
    this.world = world;
    this._player1 = null;
    this._player2 = null;
  }
  //The run function is responsible for the animation on the canvas (responsible for shwing snake move)
  // Able to speed up and slow down snake
  run() {
    let lastTime = 0;

    const updateFrame = (milliseconds: number) => {
      this._player1!.makeTurn();
      this._player2!.makeTurn();
      const elapsedTime = milliseconds - lastTime;
      if (elapsedTime > 1000) {
        this.world.update(1);
        lastTime += 1000;
      }
      requestAnimationFrame(updateFrame);
    };
    requestAnimationFrame(updateFrame);
  }

  //Responsible for setting the first player in the game
  public set player1(player1: Player) {
    this._player1 = player1;
  }

  //Responsible for setting the second player in the game
  public set player2(player2: Player) {
    this._player2 = player2;
  }

  //Returns the world
  public get world1() {
    return this.world;
  }
}

export default GameController;
