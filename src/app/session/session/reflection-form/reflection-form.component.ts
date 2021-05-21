import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {SessionService} from '../../../service/session/session.service';
import {map} from 'rxjs/operators';
import {ReflectionService} from '../../../service/reflection/reflection.service';
import {Reflection} from '../../../api-interface/Reflection';

@Component({
  selector: 'app-reflection-form',
  templateUrl: './reflection-form.component.html',
  styleUrls: ['./reflection-form.component.less']
})
export class ReflectionFormComponent implements OnInit {

  @Output() reflectionSubmission = new EventEmitter<Map<boolean, Reflection>>();
  @Output() contentListSubmission = new EventEmitter<Map<boolean, any[]>>();
  showContent: boolean;

  @Input() currentReflection: Reflection = {
    id: null,
    entry: 'Enter your reflection',
    content: []
  };
  contentList = new Array();
  @Input() currentSession: any;

  constructor(private reflectionService: ReflectionService) { }

  ngOnInit(): void {
    // if (this.currentReflection.entry)
    // {
    //   this.currentReflection.entry = 'Enter Your Reflection here';
    //   this.currentReflection.content = [];
    // }
  }

  submitReflection(): void{
    this.reflectionService.saveReflection(this.currentReflection, this.currentSession.id)
      .subscribe(response => {
          const reflectionMap = new Map([[true, response]]);
          this.reflectionSubmission.emit(reflectionMap);
          const contentMap = new Map([[true, this.contentList]]);
          if (!(this.getAllContent().length === 0)) {
          this.contentListSubmission.emit(contentMap);
        } else {console.log('no content to push '); }
        }
      );
  }



  showContentForm(): void {
    this.showContent = true;
  }

  addContent(mapObject: Map<boolean, any> ): void {


    if (mapObject.has(true))
    {
      console.log(mapObject);
      this.contentList.push(mapObject.get(true));
      console.log(this.contentList.length);
      console.log(this.contentList);
    }
  }

  getAllContent(): any[] {
    return this.contentList;
  }

}
