const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let barney;
  let rex;
  let yoshi;

  beforeEach(function () {
    barney = new Dinosaur('t-rex', 'carnivore', '23')
    rex = new Dinosaur('velociraptor', 'carnivore', '10')
    yoshi = new Dinosaur('diplodocus', 'vegetarian', '30')
    park = new Park('DinoWorld', 15, 3)
  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, 'DinoWorld')
  });

  it('should have a ticket price', function(){
    const actual = park.price
    assert.strictEqual(actual, 15)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs
    assert.deepEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addNew(barney);
    park.addNew(rex);
    park.addNew(yoshi);
    const actual = park.dinosaurs
    assert.strictEqual(actual.length, 3)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addNew(barney);
    park.addNew(rex);
    park.addNew(yoshi);
    park.remove(barney);
    const actual = park.dinosaurs
    assert.deepEqual(actual, [rex, yoshi])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addNew(barney);
    park.addNew(rex);
    park.addNew(yoshi);
    const actual = park.findMostAttractiveDinosaur();
    assert.strictEqual(actual, yoshi)
  });

  xit('should be able to find all dinosaurs of a particular species', function(){
    park.addNew(barney);
    park.addNew(rex);
    park.addNew(yoshi);
    chosenSpecies = 'diplodocus'
    const expected = park.findSpecies();
    assert.equal(expected.length, 1)
  });

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
