export class Team {
  constructor() {
    this.members = new Set();
  }

  add(pers) {
    if (this.members.has(pers)) {
      throw Error(
        "Нельзя добавлять в команду несколько раз одного и того же персонажа"
      );
    } else {
      this.members.add(pers);
    }

    return this.toArray();
  }

  addAll(...pers) {
    for (const value of pers) {
      this.members.add(value);
    }
    
    return this.toArray();
  }

  toArray() {
    let arr = [];

    for (const size of this.members) {
      arr.push({ name: `${size.name}`, type: `${size.type}` });
    }

    return arr;
  }

  [Symbol.iterator]() {
    let membersArr = Array.from(this.members);
    let current = 0;
    let last = membersArr.length-1;
    return {
      next() {
        if (current <= last) {
          let obj =  {
            done: false,
            value: membersArr[current],
          };
          current++;
          return obj;
        }
        return {
          done: true,
        };
      },
    };
  };
}
