import { Injectable, OnInit } from "@angular/core";
import { interval, timer } from "rxjs";


@Injectable({providedIn: 'root'})

export class TimerService implements OnInit{
    startText: string = "Start";
    seconds: number = 0;
    minutes: number = 0;
    hours: number = 0;
    result: any;
    waitClick: boolean = true;
    waitText: string = "Wait";
    startClick: boolean = true;
    isRuning: boolean = false;
    data: any;
    time: string ="00:00:00";
    subs: any;
    
    

    ngOnInit():void{
    }

    stopWatch(){
        this.isRuning = true;
        this.subs = interval(1000).subscribe(n=>{
            this.seconds++;
            
            if (this.minutes>59){
                this.hours++
                this.minutes = 0;
            }
            if (this.seconds>59) {
                this.subs.unsubscribe()
                this.minutes++
                this.seconds = 0;
                this.stopWatch();
            }
            this.display();
        })

    }
    filter(num:number){
        if (num<10) return '0' + num
        return num;
    }
    display(){
    this.time =  String(this.filter(this.hours))+':'+ String(this.filter(this.minutes))+':'+String(this.filter(this.seconds));
    return this.time;
    }
    refresh(){
        if(this.isRuning){
            this.subs.unsubscribe();
        }
        this.isRuning = false;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.time = '00:00:00'
    }
        
    
    start(){
        if(this.startClick){
        this.startText = "Stop";
        this.stopWatch();
        }
        if(!this.startClick){
        this.startText = "Start";
        this.result = 'Your result: ' + this.time;
        this.refresh();
        }
    this.startClick = !this.startClick
    }

    reset(){
        this.refresh();
        this.startClick = true;
        this.start();
    }
    wait(){
    

        if(this.waitClick){
            this.subs.unsubscribe();
            this.waitText= "Go";
        }
        if(!this.waitClick){
            this.subs.unsubscribe();
            this.stopWatch();
            this.waitText= "Wait";
        }
        this.waitClick = !this.waitClick;
    
        
    }
}

