import { Pets } from './pets.js';

export class Cats extends Pets {
  constructor(type, name, age, weight) {
    super(type, name, age, weight);
    this.breed = null;
    this.clawsSharpness = null;
  }
}