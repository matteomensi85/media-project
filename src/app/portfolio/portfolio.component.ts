import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  array: number[]=[]
  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 21; i++)
    {
      this.array.push(i);
    }
    console.log(this.array);
  }

}
