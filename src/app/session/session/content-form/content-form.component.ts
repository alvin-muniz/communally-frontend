import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Content} from '../../../api-interface/Content';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.less']
})
export class ContentFormComponent implements OnInit {

  title = 'Doors of Perception';
  author = 'Aldous Huxely';
  url = 'https://en.wikipedia.org/wiki/The_Doors_of_Perception';

  @Output() submittedContent = new EventEmitter<Map<boolean, any>>();

  constructor() { }

  ngOnInit(): void {
  }

  submitContent(): void {

    const content: Content = {
      author: this.author,
      url: this.url,
      title: this.title,
      id: null
    };

    const objectMap = new Map(
      [
        [true, content]
      ]
    );

    this.submittedContent.emit(objectMap);
  }

}
