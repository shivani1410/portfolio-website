import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'My Portfolio';
  constructor() {
  window.addEventListener('scroll', this.revealSections);
}

revealSections = () => {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
};


  scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}

}
