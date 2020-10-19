import { Bowman } from "../bowman";

test("Bowman set _type(value) передача не верного type", () => {
  function received() {
    new Bowman("Reiter", "");
  }
  expect(received).toThrowError(new Error("Передан не существующий тип"));
});

test("Bowman set _name(value) передача не верного name", () => {
  function received() {
    new Bowman("R", "Bowman");
  }
  expect(received).toThrowError(
    new Error("Имя должно содержать от 2 до 10 символов")
  );
});

test("Bowman levelUp() при health > 0", () => {
  const expected = {
    name: "Reiter",
    health: 100,
    level: 2,
    type: "Bowman",
    attack: 30,
    defence: 30,
  };
  const received = new Bowman("Reiter", "Bowman");
  received.levelUp();
  expect(received).toEqual(expected);
});

test("Bowman levelUp() при health = 0", () => {
  function received() {
    const received = new Bowman("Reiter", "Bowman");
    received.health = 0;
    received.levelUp();
  }
  expect(received).toThrowError(new Error("Нельзя повысить лвл умершего"));
});

test("Bowman damage() при health > 0", () => {
  const expected = 77.5;
  const received = new Bowman("Reiter", "Bowman");
  received.damage(30);
  expect(received.health).toEqual(expected);
});

test("Bowman damage() при health = 0", () => {
  function received() {
    const received = new Bowman("Reiter", "Bowman");
    received.health = 0;
    received.damage(30);
  }
  expect(received).toThrowError(new Error("Персонаж уже мертв"));
});
