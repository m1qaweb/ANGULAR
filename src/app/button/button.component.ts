import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, NgIf, FormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  showText: boolean = false;
  displayTextMessage: string = 'ENTER COLOR';

  displayText() {
    this.showText = true;
  }
  typedColor = 'hsl(330, 100%, 50%)';
}
