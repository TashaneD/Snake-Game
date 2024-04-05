import WorldModel from "./WorldModel";
import Player from "./Player";
import HumanPlayer from "./HumanPlayer";

class GameController {
  private world: WorldModel;
  private _player1: Player | null;
  private _player2: Player | null;

  constructor(world: WorldModel) {
    this.world = world;
    this._player1 = null;
    this._player2 = null;
  }

  run() {
    let lastTime = 0;

    const updateFrame = (milliseconds: number) => {
      this._player1!.makeTurn();
      this._player2!.makeTurn();
      const elapsedTime = milliseconds - lastTime;
      if (elapsedTime > 100) {
        this.world.update(1);
        lastTime += 100;
      }
      requestAnimationFrame(updateFrame);
    };
    requestAnimationFrame(updateFrame);
  }

  public set player1(player1: HumanPlayer) {
    this._player1 = player1;
  }

  public set player2(player2: Player) {
    this._player2 = player2;
  }

  public get world1() {
    return this.world;
  }
}

export default GameController;
