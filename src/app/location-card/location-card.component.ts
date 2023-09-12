import { Component } from '@angular/core';
@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})

export class LocationCardComponent {
  onKey(event: any) {
    const inputValue = event.target.value;
    console.log(inputValue);
  }
  people = [
    {
      name: "Bob",
      age: "27",
      occupation: "Painter",
    }
  ]
}
