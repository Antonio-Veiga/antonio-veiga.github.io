import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as THREE from 'three';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  @ViewChild('CanvasHolder') canvasContainer!: ElementRef;

  constructor() { }

  ngOnInit() { }

}
