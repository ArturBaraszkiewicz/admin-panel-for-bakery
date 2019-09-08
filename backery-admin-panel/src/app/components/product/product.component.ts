import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

export interface IProductData {
  id: number;
  name?: string;
  description?: string;
  price?: number;
  portionsNumber?: number;
}

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  /**
   * Id product we want to display
   */
  @Input()
  productId: number;

  constructor() { }

  ngOnInit() { }

}
