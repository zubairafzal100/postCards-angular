import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/Images/tree.jpeg',
      username: 'nature',
      content: 'This is a neat tree',
    },
    {
      title: 'Snowy Mountains',
      imageUrl: 'assets/Images/mountain.jpeg',
      username: 'snowy-mountain',
      content: 'These are snowy mountains',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/Images/biking.jpeg',
      username: 'biking12223',
      content: 'Here we go for mountain biking',
    },
  ];
}
