import { Batsman } from './batsman';
export class Scorer {
    listOfBatsman: Array<Batsman>;
    totalScore: number;
    overs : number;
    constructor() {
        this.totalScore = 0;
        this.listOfBatsman = [];
        this.overs = 0;
    }
    addBatsman(batsman: Batsman) {
        this.listOfBatsman.push(batsman);
    }
    changeStrike(currentPlayerOnStrike: Batsman) {
        let newPlayerOnStrike: Batsman;
        if (currentPlayerOnStrike === this.listOfBatsman[0]) {
            newPlayerOnStrike = this.listOfBatsman[1];
        } else {
            newPlayerOnStrike = this.listOfBatsman[0];
        }
        return newPlayerOnStrike;
    }
    calculateScore(arr: Array<number>) {
        this.overs = Math.floor(arr.length / 6) + (arr.length % 6)/10;
        let playerOnStrike = this.listOfBatsman[0];
        arr.forEach((runScored, ballNumber) => {
            if (runScored % 2 === 1) {
                if (playerOnStrike) {
                    playerOnStrike.addRuns(runScored);
                    playerOnStrike = this.changeStrike(playerOnStrike);
                }
            } else {
                if (playerOnStrike) {
                    playerOnStrike.addRuns(runScored);
                }
            }
            this.totalScore += runScored;
            if ((ballNumber + 1) % 6 === 0) {
                if (playerOnStrike) {
                    playerOnStrike = this.changeStrike(playerOnStrike);
                }
            }
        })
    }

    printScore() {
        console.log(`Total score: ${this.totalScore}`);
        this.listOfBatsman.forEach(batsman => {
            console.log(`${batsman.playerName} scored ${batsman.numberOfRuns}`);
        })
        console.log(`Total overs bowled: ${this.overs}`);
    
    }
}