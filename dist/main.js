"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var batsman_1 = require("./batsman");
var scorer_1 = require("./scorer");
var scorer = new scorer_1.Scorer();
var batsman1 = new batsman_1.Batsman('Dhoni');
var batsman2 = new batsman_1.Batsman('Kohli');
scorer.addBatsman(batsman1);
scorer.addBatsman(batsman2);
scorer.calculateScore([1, 2, 0, 0, 4, 1, 6, 2, 1, 3]);
scorer.printScore();
