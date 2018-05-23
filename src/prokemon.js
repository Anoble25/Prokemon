export class Prokemon {

  constructor (name="", type="", level="", hp="", ability="", happiness="") {
      this.name = name;
      this.type = type;
      this.level = level;
      this.hp = hp;
      this.ability = ability;
      this.happiness = happiness;
  }
}

export class Inventory {
  constructor (food="", stone="", medicine="") {
      this.food = food;
      this.stone = stone;
      this.medicine = medicine;
  }
}

export class Environment {
  constructor (gym="", travel="", hospital="") {
      this.gym = gym;
      this.travel = travel;
      this.hospital = hospital;
  }
}

export class Storage {
  constructor (backpack="", lab="") {
      this.backpack = backpack;
      this.lab = lab;
  }
}
