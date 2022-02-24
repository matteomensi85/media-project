import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UnsplashApiService } from '../unsplash-api.service';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit {

  constructor(private api: UnsplashApiService) { }
  obj: object = {};
  @Output() jsonEmitter: EventEmitter<object> = new EventEmitter<object>();
  ngOnInit(): void {
  }

  onClickSubmit(myform: NgForm) {
    let myQuery: string = myform.form.controls.input.value;
    console.log(myform);
    this.api.getUnsplash(myQuery).subscribe((x) => { 
      this.obj = x;
      console.log(this.obj);
      this.jsonEmitter.emit(this.obj); 
    
    });
  }
}
