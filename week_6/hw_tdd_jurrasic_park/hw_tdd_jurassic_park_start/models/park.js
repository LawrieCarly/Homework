const Park = function (name, price){
    this.name = name
    this.price = price
    this.dinosaurs = []
}

Park.prototype.addNew = function(dinosaur){
    this.dinosaurs.push(dinosaur)
};

Park.prototype.remove = function(dinosaur){
    index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1)
    return this.dinosaurs
};

Park.prototype.findMostAttractiveDinosaur = function(){
    let mostAttractive = this.dinosaurs[0];
    
    for(const dino of this.dinosaurs) {
        if (dino.guestsAttractedPerDay > mostAttractive.guestsAttractedPerDay){
            mostAttractive = dino;
        }
    };
    
    return mostAttractive;
};

Park.prototype.findSpecies = function(selectedSpecies){
    chosenSpecies = []
    for (let dinosaur of this.dinosaurs){
        if (dinosaur.species == selectedSpecies){
            chosenSpecies.push(dinosaur);
        }
    }
    return chosenSpecies.length
};

module.exports = Park;