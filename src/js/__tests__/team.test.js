import { Bowman } from "../bowman";
import { Magician } from "../magician";
import { Team } from "../team";

const dan = new Bowman("Dan", "Bowman");
const trim = new Magician("Trim", "Magician");

test('Team.add должен возвращять объект типа {name: "Dan", type: "Bowman"}', () =>{
    const expected = [{name: "Dan", type: "Bowman"}];
    const team = new Team();

    const received = team.add(dan);
    expect(received).toEqual(expected);
})

test('Team.add должен возвращять объект типа {name: "Trim", type: "Magician"}', () =>{
    const expected = [{name: "Trim", type: "Magician"}];
    const team = new Team();

    const received = team.add(trim);
    expect(received).toEqual(expected);
})

test('Team.add должен выбрасывать ошибку', () =>{
    const team = new Team();
    function received() {
        team.add(dan);
        team.add(dan);
    }
    expect(received).toThrowError(new Error('Нельзя добавлять в команду несколько раз одного и того же персонажа'));
})

test('Team.toArray должен производить конвертацию Set в массив', () =>{
    const expected = [
        {name: "Dan", type: "Bowman"},
        {name: "Trim", type: "Magician"}
    ];
    const team = new Team();

    const received = team.addAll(dan, trim);
    expect(received).toEqual(expected);
})
