import { Component, OnInit } from '@angular/core';
import { TimerService } from '../shared/timer.service';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {


  constructor(public timerService: TimerService ) { }

  buttonText:string = "Start";
  buttonState:boolean = true;
  

  ngOnInit(): void{
  }
  startTimer(){
    this.timerService.start();
  }
  resetTimer(){
    this.timerService.reset();
  }
  waitTimer(){
    this.timerService.wait();
  }
}


