import { Batsman } from './batsman';
import { Scorer } from './scorer';
const scorer = new Scorer();
const batsman1 = new Batsman('Dhoni');
const batsman2 = new Batsman('Kohli');
scorer.addBatsman(batsman1);
scorer.addBatsman(batsman2);
scorer.calculateScore([1, 2, 0, 0, 4, 1, 6, 2, 1, 3]);
scorer.printScore();