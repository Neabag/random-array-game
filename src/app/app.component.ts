import { Component } from '@angular/core';
import { Observable } from "rxjs";

import Player from './models/player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amplus-assignment';
  player1: string = "Player1";
  player2: string = "Player2";
  player1Score = 0;
  player2Score = 0;
  player1Total = 0;
  player2Total = 0;
  player1Count = 0;
  player2Count = 0;
  winner = "";

  randoms = [];
  constructor() {
    this.randoms = [...Array(10)].map(() => Math.floor(Math.random() * 100));
  }

  playFun(context) {
    if ((this.player1Count + this.player2Count) < 10) {
      if (context === "Player1") {
        this.player1Score = this.randoms[this.player1Count];
        this.player1Total = this.player1Total + this.player1Score;
        this.player1Count++;
      } else {
        this.player2Score = this.randoms[9 - this.player2Count];
        this.player2Total = this.player2Total + this.player2Score;
        this.player2Count++;
      }
    } else {
      this.getWinner();
    }
  }
  getWinner() {
    if (this.player1Count + this.player2Count > 9) {
      let winner = this.player1Total > this.player2Total ? "Player1" : this.player1Total < this.player2Total ? "Player2" : "Match is Draw, Please restart to play again";
      this.winner = winner;
    }
  }
  restart() {
    this.randoms = [...Array(10)].map(() => Math.floor(Math.random() * 100));
    this.player1Count = 0;
    this.player1Score = 0;
    this.player1Total = 0;
    this.player2Count = 0;
    this.player2Score = 0;
    this.player2Total = 0;
    this.winner = "";
  }

}
