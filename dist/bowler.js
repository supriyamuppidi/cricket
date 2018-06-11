"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var Bowler = /** @class */ (function (_super) {
    __extends(Bowler, _super);
    function Bowler(name) {
        var _this = _super.call(this, name) || this;
        _this.numberOfRunsGiven = 0;
        _this.numberOfBallsBolwed = 0;
        _this.numberOfWicketsTaken = 0;
        return _this;
    }
    Object.defineProperty(Bowler.prototype, "numberOfGivenRuns", {
        get: function () {
            return this.numberOfRunsGiven;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bowler.prototype, "numberOfOversBowled", {
        get: function () {
            return this.numberOfBallsBolwed;
        },
        enumerable: true,
        configurable: true
    });
    Bowler.prototype.addRunsGiven = function (run) {
        this.numberOfRunsGiven += run;
    };
    Bowler.prototype.addWicketsTaken = function (wicket) {
        this.numberOfWicketsTaken = +wicket;
    };
    return Bowler;
}(player_1.Player));
exports.Bowler = Bowler;
