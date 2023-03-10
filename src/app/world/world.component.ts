import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { CanvasComponent } from '../canvas/canvas.component';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
})
export class WorldComponent implements OnInit {
  canvas: any

  xl: boolean = false
  sm: boolean = false

  constructor(platform: Platform) { platform.is('mobile') ? this.sm = true : this.xl = true }

  ngOnInit() { this.canvas = CanvasComponent }

  github() {
    window.location.href = "https://github.com/Antonio-Veiga/"
  }

  discord() {
    window.location.href = "https://discord.gg/9HqFyTTBbM"
  }
}
