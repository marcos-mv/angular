import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public initialCount = 100;

  public clicked = false;

  public active = '';

  public button_click() {
    if (!this.clicked) {
      this.initialCount++;
      this.active = 'liked'
      console.log('clicked')
    }
    else {
      this.initialCount--;
      this.active = ''
      console.log('undo click')
    }
    this.clicked = !this.clicked; //inicia falso e toda vez que alguem clicar no botao inverte seu estado
  }
}
