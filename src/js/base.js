export const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Имя не соответствует критериям');
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Тип не соответствует критериям');
    }
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }
}
