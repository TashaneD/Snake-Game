import WorldModel from "./WorldModel";

interface IWorldView {
  display(model: WorldModel): void;
}

export default IWorldView;
