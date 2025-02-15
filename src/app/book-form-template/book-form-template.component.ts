import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form-template',
  templateUrl: './book-form-template.component.html',
  styleUrls: ['./book-form-template.component.css']
})
export class BookFormTemplateComponent implements OnInit {
  formHasBeenSubmitted = false;
  onFormSubmit(formObj: NgForm){
    this.formHasBeenSubmitted = true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
