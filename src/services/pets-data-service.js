import { Dogs } from '../models/dogs.js';
import { Cats } from '../models/cats.js';
import { Errors } from '../models/errors.js';

export class PetsDataService {
  constructor() {
    this.dogs = [];
    this.cats = [];
    this.errors = [];
  }

  getDogs() {
    return this.dogs;
  }

  getCats() {
    return this.cats;
  }

  loadData(pets) {
    for (const data of pets) {
      switch(data.type) {
        case 'dog':
          if(this.validateDogsData(data)) {
            let dog = this.loadDogs(data);
            if(dog)
              this.dogs.push(dog);
          }
          break;
        case 'cat':
          if(this.validateCatsData(data)) {
            let cat = this.loadCats(data);
            if(cat)
              this.cats.push(cat);
          }
          break;
      }
    }
  }

  loadDogs(dog) {
    try {
      let d = new Dogs(dog.type, dog.name, dog.age, dog.weight);
      d.breed = dog.breed;
      d.energyLevel = dog.energyLevel;
  
      return d;
    } catch (error) {
      this.errors.push(new Errors(`Error in loadDogs: ${error.message}.`))
    }

    return null;
  }

  loadCats(cat) {
    try {
      let c = new Cats(cat.type, cat.name, cat.age, cat.weight);
      c.breed = cat.breed;
      c.clawsSharpness = cat.clawsSharpness;

      return c;
    } catch (error) {
      this.errors.push(new Errors(`Error in loadCats: ${error.message}.`))
    }

    return null;
  }

  validateDogsData(dog) {
    let requiredFields = ['type', 'name', 'age', 'weight', 'breed', 'energyLevel'];
    let missingField = false;

    for (const field of requiredFields) {
      if(!dog[field]) {
        this.errors.push(new Errors(`Missing reuired field: ${field} in validateDogsData.`))
        missingField = true;
      }
    }

    return !missingField;
  }

  validateCatsData(cat) {
    let requiredFields = ['type', 'name', 'age', 'weight', 'breed', 'clawsSharpness'];
    let missingField = false;

    for (const field of requiredFields) {
      if(!cat[field]) {
        this.errors.push(new Errors(`Missing required field: ${field} in validateCatsData.`))
        missingField = true;
      }
    }

    return !missingField;
  }
}