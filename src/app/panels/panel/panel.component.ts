import { Component, Input, OnInit } from '@angular/core';
import { Info } from 'src/app/core/info.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  constructor() {}

  @Input() isLast: boolean = false;
  @Input() direction: 'left' | 'right' = 'left';
  @Input() info!: Info;

  ngOnInit(): void {}
}
