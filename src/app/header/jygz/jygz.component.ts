import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng';

@Component({
  selector: 'app-jygz',
  templateUrl: './jygz.component.html',
  styleUrls: ['./jygz.component.css']
})
export class JygzComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
