import WorldModel from "./WorldModel";

//Responsible for displaying the WorldModel
interface IWorldView {
  display(model: WorldModel): void;
}

export default IWorldView;
