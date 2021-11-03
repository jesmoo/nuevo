class game {
  constructor() {
    this.numberUser = 0;
    this.computer = 0;
    this.numRandom();
  }
  numRandom() {
    this.computer = Math.floor(Math.random() * 49 + 1);
  }
  setNumber(numb) {
    this.numberUser = numb;
  }
  get num() {
    return this.computer;
  }

  get win() {
    if (this.numberUser === this.computer) {
      return true;
    } else {
      return false;
    }
  }
}

const gameClass = new game();

export default gameClass;
