import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import {trigger, state, transition, animate, style} from '@angular/animations';
import { Syntax } from 'syntax';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  animations:[
    trigger('fade',[
      
      state('void',style({opacity:0})),
      transition('void=>*',[
          animate(2000)
      ])
    ])
  ]
})
export class ViewComponent implements OnInit {
   public searchedText;
   public details:any[];
   public match:any;
   public characterFound=false;
   
   public character;
  constructor(public router:Router,public _route:ActivatedRoute,private appService:AppService) { }

  ngOnInit() {

    this.searchedText=this._route.snapshot.queryParams["searchedValue"];
    this._route.queryParams.subscribe((params: Params) => {
      this.searchedText = params["searchedValue"];
    });

  

       this.appService.getAllDetails().subscribe(
              data=>
              {
                this.details=data.characters;
                
              },
              error=>
              {
                console.log("Some error occured")
                console.log(error.errorMessage);
              }
          
              
          

      )

    
    /*  for(this.character of this.details)
      {
        if(this.character.characterName.toLowerCase()==this.searchedText.toLowerCase())
        {
          this.characterFound=true;
          console.log(this.character);
          
        }

        else
        {
          this.characterFound=false
        }


      }

    /*  if(this.characterFound==true)
      {
       console.log(this.details[this.character])
      }

      */

      }

     
    

      


      

}
