import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  category?: string;  // Define the category property here

  updateCategoryFromEvent(newCategory: string) {
    this.category = newCategory;
  }
}
