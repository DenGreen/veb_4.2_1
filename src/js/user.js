import { Bowman } from "./bowman";
import { Daemon } from "./daemon";
import { Magician } from "./magician";
import { Team } from "./team";

const dan = new Bowman("Dan", "Bowman");
const greid = new Magician("Greid", "Magician");
const doom = new Daemon("Doom", "Daemon");

const team = new Team();
    
team.addAll(dan, greid, doom, doom);

for(let value of team) {
    console.log(value);
}