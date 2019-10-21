import { Component, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent implements OnInit {
  checkIcon;
  mastercardIcon;

  constructor() { }

  ngOnInit() {
    this.checkIcon = faCheckCircle;
    this.mastercardIcon = faCcVisa;
  }

}
