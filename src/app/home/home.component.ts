import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() public  parentData;
  @Output() 
  notify: EventEmitter<String> = new EventEmitter<String>();
  public details:any[];
  public searchedText="";
  private incrementer: number;
  private placeholderArray: string[];
  public placeholderText: string;


  constructor(private router:Router,private appService:AppService) { }
 
  ngOnInit() 
  {

    this.incrementer = 1;
    this.placeholderArray = [
      "Enter your favourite character...",
      "What are you waiting for?",
      "Just Type..."
    ];
    this.placeholderText = this.placeholderArray[0];
    // after every 2.5 seconds
    setInterval(() => {
      this.placeholderText = this.placeholderArray[this.incrementer];
      ++this.incrementer;
      if (this.incrementer === 3) this.incrementer = 0;
    }, 2000);

    
    this.appService.getAllDetails().subscribe(
      data=>
      {
        this.details=data.characters;
        console.log(data.characters);
        console.log(this.details[0].characterName);
        
      },
      error=>
      {
        console.log("Some error occured")
        console.log(error.errorMessage);
      }

     
  
      
  

)
    }



 /* clickMe()
  {
    
    this.notify.emit("Thanks codeEvolution");

  }*/

  public sendMessageUsingKeypress: any = (event: any) => {
    if (event.keyCode === 13) { // 13 is keycode of enter.
      this.onGo();
    }
  }
 
  public onGo:any=()=> {
    // navigate to results page only if user entered more than 1 character
    console.log("onGo is called");
    if (this.searchedText.length < 2)
    {  
      console.log("if is called");
       return;
    }

    // navigate and pass  query parameter
    this.router.navigate(['/view'], {
      queryParams: { searchedValue: this.searchedText }
    });
  }   






}


