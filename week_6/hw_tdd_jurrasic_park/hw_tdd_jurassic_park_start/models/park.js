const Park = function (name, price){
    this.name = name
    this.price = price
    this.dinosaurs = []
}

Park.prototype.addNew = function(dinosaur){
    this.dinosaurs.push(dinosaur)
};

Park.prototype.remove = function(){
    this.dinosaurs.pop()
};

Park.prototype.mostPopular = function(){
    for (let dinosaur of this.dinosaurs){
        Math.max(dinosaur.guestsAttractedPerDay)
        return dinosaur
    };
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