import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

interface Project {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      title: 'AI Video Notes',
      description: 'Conversational AI chatbot for video content.'
    },
    {
      id: 2,
      title: 'Hand-Gesture Based Presentation Controller',
      description: 'Hand gesture–based presentation controller that enables seamless navigation and interaction with presentation slides',
      
      },
    {
      id: 3,
      title: 'Song Recommendation System',
      description: 'A song recommendation system that suggests songs similar to the song you ask.',
     }
     ,{
      id: 4,
      title: 'Medical Chatbot',
      description: 'Medical Chatbot is an assistant which answers queries related to medical symptoms.'
     },{
      id: 5,
      title: 'Airport VR Simulation',
      description: 'Airport VR gives a virtual tour of a fictional Airport. The project is built using Unity, Langchain and llama.'
      
     }
  ];

  selectedProject: Project | null = this.projects[0]; // Default to first project

  selectProject(project: Project) {
    this.selectedProject = project;
  }
}
