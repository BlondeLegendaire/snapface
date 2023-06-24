import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  buttonText!: string;

  ngOnInit(): void {
    this.snapped = false;
    this.buttonText = "Oh Snap !";
  }

  onSnap() {
    this.snapped ? this.UnSnap() : this.Snap();
  }

  Snap() {
    this.faceSnap.snaps++;
    this.snapped = true;
    this.buttonText = "Oops, unSnap !"
  }

  UnSnap(){
    this.faceSnap.snaps--;
    this.snapped = false;
    this.buttonText = "Oh Snap !";
  }
}
