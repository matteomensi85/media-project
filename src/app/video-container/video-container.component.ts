import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UnsplashApiService } from '../unsplash-api.service';
import { VimeoApiService } from '../vimeo-api.service';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit {

  constructor(private api: UnsplashApiService, private vimeoApi: VimeoApiService) { }
  obj: object = {};
  @Output() jsonEmitter: EventEmitter<object> = new EventEmitter<object>();
  ngOnInit(): void {
  }

  onClickSubmit(myform: NgForm) {
    let myQuery: string = myform.form.controls.input.value;
    let myOrientation: string = myform.form.controls.orientSelect.value;
    let myColor: string = myform.form.controls.colorSelect.value;
    console.log(myform);
    this.api.getUnsplash(myQuery, myOrientation, myColor).subscribe(
      (x) => { 
      this.obj = x;
      console.log(this.obj);
      this.jsonEmitter.emit(this.obj); 
    
      }
    );
    this.vimeoApi.getVimeo(myQuery).subscribe(console.log);
  }
}
