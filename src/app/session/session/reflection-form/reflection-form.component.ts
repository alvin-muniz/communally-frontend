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
  showContent: boolean;
  @Input() currentReflection: Reflection = {
    id: null,
    entry: 'null',
    content: []
  };
  contentList = new Array();
  @Input() currentSession: any;

  constructor(private reflectionService: ReflectionService) { }

  ngOnInit(): void {
  }

  submitReflection(): void{

    this.reflectionService.saveReflection(this.currentReflection, this.currentSession.id)
      .subscribe(response => {
          this.currentReflection =  response;
          this.reflectionService.setCurrentReflection(response);
          console.log(this.reflectionService.getCurrentReflection().id, 'reflection service called');
          const reflectionMap = new Map(
            [
              [true, response]
            ]
          );
          this.reflectionSubmission.emit(reflectionMap);

        }
      );
  }

  saveReflectionContent() {
    if (!(this.getAllContent().length === 0))
    {
      console.log('this' + this.reflectionService.getCurrentReflection().id);
      this.contentList.forEach(content => {
        this.reflectionService.saveReflectionContent(this.reflectionService.getCurrentReflection().id, this.currentSession.id, content)
          .subscribe(savedContent => {
            console.log(savedContent.id, 'Content Saved Succcessfull wtih this id');
          });
      });

    } else {
      console.log('this is calling because content is empty');
    }
  }

  showContentForm() {
    this.showContent = true;
  }

  addContent(mapObject: Map<boolean, string> ) {


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
