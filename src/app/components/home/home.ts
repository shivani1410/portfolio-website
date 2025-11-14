import { Component } from '@angular/core';
import { About } from '../about/about';
import { Skills } from "../skills/skills";
import { Projects } from "../projects/projects";
import { Contact } from '../contact/contact';
@Component({
  selector: 'app-home',
  imports: [ About, Skills, Projects,Contact],
  
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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
