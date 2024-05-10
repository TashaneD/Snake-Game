interface IInputHandler {
  // Method to check if a left move was made since the last reset
  madeLeftMove(): boolean;

  // Method to check if a right move was made since the last reset
  madeRightMove(): boolean;

  // Method to reset the state of the left move
  resetLeftMove(): void;

  // Method to reset the state of the right move
  resetRightMove(): void;
}
export default IInputHandler;
