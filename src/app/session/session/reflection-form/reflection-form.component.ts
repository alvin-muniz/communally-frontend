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

  @Output() reflectionSubmission = new EventEmitter<boolean>();
  showContent: boolean;
  currentReflection = {
    id: null,
    entry: '',
    content: []
  };
  contentList = new Array();
  @Input() currentSession: any;

  constructor(private reflectionService: ReflectionService) { }

  ngOnInit(): void {

  }

  submitReflection(): void {

    this.reflectionService.saveReflection(this.currentReflection, this.currentSession.id)
      .subscribe(response => {
          this.currentReflection = response;
          this.reflectionSubmission.emit(true);
          if(this.getAllContent().length === 0)
          {
            console.log('this is calling because content is empty');
          }
          // console.log(this.currentReflection.id, 'persisted successfully');
          // console.log('saved reflection', response);
        }
      );
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
