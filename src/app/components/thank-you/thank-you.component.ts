import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  name: string;
  orderPrice: string;

  constructor(private route: ActivatedRoute) {
    this.name = '';
    this.orderPrice = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.orderPrice = params['orderPrice'];
    });
  }
}
