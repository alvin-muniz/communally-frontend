import {Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reflection-form',
  templateUrl: './reflection-form.component.html',
  styleUrls: ['./reflection-form.component.less']
})
export class ReflectionFormComponent implements OnInit {

  @Output() reflectionSubmission = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void {

    this.reflectionSubmission.emit(true);
  }

}
