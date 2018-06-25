import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title = 'our game'

  

  questionInfo;
  score =0;
  answer;

  constructor(private DataService: DataService){}

  getQuestionInfo(){
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
          console.log(this.questionInfo.answer)
        }
      )
  }


  ngOnInit(){
    this.getQuestionInfo()
  }
 submit(){
   if(this.answer.toLowerCase() ==this.questionInfo.answer.toLowerCase()){
    this.score= this.score +this.questionInfo.value;
   }else{
    this.score-= this.questionInfo.value;
   }
   this.getQuestionInfo()
   this.answer="";
 }

  }

