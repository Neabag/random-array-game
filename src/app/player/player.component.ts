import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnChanges, OnInit {
  @Input() player;
  @Input() score;
  @Input() totalScore;

  @Output("playFun") playFun: EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnInit() {

  }
  play() {
    this.playFun.emit();
  }
  ngOnChanges() {
  }

}
