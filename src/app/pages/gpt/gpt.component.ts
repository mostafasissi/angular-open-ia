import { query } from '@angular/animations';
import { Component , OnInit} from '@angular/core';
import {FormGroup , FormBuilder} from '@angular/forms' ; 
import { GptService } from 'src/app/services/gpt.service';
@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.css']
})
export class GptComponent implements OnInit {
  queryFormGroup !: FormGroup ; 
  inputMessages = [
      {
        role : "system",
        content : "You are a helpful assistant."
      }
  ] ;
  response  :  any ; 
  constructor(
    private fb : FormBuilder , 
    private gptService : GptService 
    ){}
  ngOnInit(): void {
    this.queryFormGroup = this.fb.group({
      query : this.fb.control('')
    })
    this.handleAskGPT();
  }

  handleAskGPT() : void {

    this.inputMessages.push({
      role : 'user' , content : this.queryFormGroup.value.query
    });

    this.gptService.askGPT(this.inputMessages).subscribe({
      next : (resp) => {
          this.response = resp ; 
          // add the response messages to the history messages
          this.response.choices.forEach((choice : any) =>{
            this.inputMessages.push({
              role : "assistant" , content : choice.message.content
            })
          })
          
        },
      // error : (err) =>{
      //   console.error();
      // }
    })
  }
  

}
