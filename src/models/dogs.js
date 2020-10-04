import { Pets } from './pets.js';

export class Dogs extends Pets {
  constructor(type, name, age, weight) {
    super(type, name, age, weight);
    this.breed = null;
    this.energyLevel = null;
  }
}