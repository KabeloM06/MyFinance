import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  stocks: any = [];

  constructor(private stocksService : StocksService) { }

  ngOnInit(): void {
    this.stocksService.getStocks()
    .subscribe((res: any)=>{
      this.stocks = res.results;
      console.log(this.stocks);
    })
  }

}
