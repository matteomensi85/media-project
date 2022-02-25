import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnChanges {
  @Input() prtfObj: any = null;

  constructor() { }

  ngOnInit(): void {
   
  }

  checkObj(){
    console.log(this.prtfObj.results[0].urls.small);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes.prtfObj.currentValue);
  }

}
