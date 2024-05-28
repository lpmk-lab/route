import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
name:string=""
email:string=""
message:string=""

isSubmitted:boolean=false

onSubmmit(){
  this.isSubmitted=true
}

onExit(){
  if((this.name||this.email||this.message)&& !this.isSubmitted){
    return confirm("Do you want to exit without completeing Submmit")
  }else{
    return true
  }
}
}
