import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-counter",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <button type="button" class="btn btn-primary" (click)="decrement()">
        -
      </button>
      <span>{{ current }}</span>
      <button type="button" class="btn btn-primary" (click)="increment()">
        +
      </button>
    </div>
  `,
  styles: [],
})
export class CounterComponent {
  current = 0;

  increment() {
    this.current++;
  }

  decrement() {
    this.current--;
  }
}
