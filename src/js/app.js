export class Character {
  constructor(name, type) {
    (this._name = name),
      (this.health = 100),
      (this.level = 1),
      (this._type = type);
  }

  set _type(value) {
    const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    
    if(arr.includes(value)){
      return this.type = value;
    }
    throw Error("Передан не существующий тип");
  }

  set _name(value) {
    if (value.length < 2 || value.length > 10) {
      throw Error("Имя должно содержать от 2 до 10 символов");
    }
    this.name = value;
  }

  levelUp() {
    if (this.health === 0) {
      throw Error("Нельзя повысить лвл умершего");
    } else {
      this.level++;
      this.attack += (this.attack / 100) * 20;
      this.defence += (this.defence / 100) * 20;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw Error("Персонаж уже мертв");
    }
  }
}
