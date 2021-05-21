import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../api-interface/Content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {

  @Input() content: Content;


  constructor() { }

  ngOnInit(): void {
    if(this.content)
    {

    }
  }

}
