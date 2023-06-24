import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped!: boolean;
  buttonText!: string;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = "Mon meilleur ami depuis tout petit !";
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snapped = false;
    this.buttonText = "Oh Snap !";
  }

  onSnap() {
    this.snapped ? this.UnSnap() : this.Snap();
  }

  Snap() {
    this.snaps++;
    this.snapped = true;
    this.buttonText = "Oops, unSnap !"
  }

  UnSnap(){
    this.snaps--;
    this.snapped = false;
    this.buttonText = "Oh Snap !";
  }
}
