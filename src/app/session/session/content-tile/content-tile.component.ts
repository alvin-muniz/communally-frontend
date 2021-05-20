import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Content} from '../../../api-interface/Content';

@Component({
  selector: 'app-content-tile',
  templateUrl: './content-tile.component.html',
  styleUrls: ['./content-tile.component.less']
})
export class ContentTileComponent implements OnInit {

  title = 'test content';
  author = 'author';
  url = 'url';

  @Output() submittedContent = new EventEmitter<Map<boolean, any>>();

  constructor() { }

  ngOnInit(): void {
  }

  submitContent() {

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
