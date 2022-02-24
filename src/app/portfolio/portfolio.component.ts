import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnChanges {
  array: number[]=[]
  @Input() prtfObj: any = null;

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 21; i++)
    {
      this.array.push(i);
    }
    console.log(this.array);
    console.log("portfolio side object: ",this.prtfObj);
  }

  checkObj(){
    console.log(this.prtfObj.results[0].urls.small);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes.prtfObj.currentValue);
  }

}
