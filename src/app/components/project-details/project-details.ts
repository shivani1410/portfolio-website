import { Component , AfterViewInit,ElementRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  video?:string;
  code?:string
}




@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.html',
  styleUrls: ['./project-details.css']
})
export class ProjectDetails implements AfterViewInit{

  projects: Project[] = [
    {
      id: 1,
      title: 'AI Video Notes',
      description: 'Conversational AI chatbot for video content. The project built using OpenAI API for natural language processing and llama for chat assistant. The system transcribes video content using Whisper API and stores the transcriptions in a vector database for efficient retrieval.'+
      ' Users can interact with the chatbot to ask questions about the video content and receive relevant answers based on the transcriptions.',
      techStack: ['Angular', 'Python', 'OpenAI API'],
      code:'https://github.com/shivani1410/AiVideoNotes.git',
      video:'assets/aivideonotes.mp4'
    },
    {
      id: 2,
      title: 'Hand-Gesture Based Presentation Controller',
      description:  'Hand gesture–based presentation controller that enables seamless navigation and interaction with presentation slides. This '
     +' system is a combination of Machine Learning and Computer Vision techniques. The model is trained on a custom dataset named HaGRID to recognize the hand gesture.'+
     'The system uses OpenCV to capture real-time input from a webcam and the trained model detect the hand gesture, based on the recognized gesture'
     +' the system performs action such as moving to next slide, previous slide etc. This project got me a GOOD grade in my Master\'s Dissertation".',
      
      techStack: ['MediaPipe', 'OpenCV', 'Python'],
      code:'https://github.com/shivani1410/PresentationController.git',
      video:'assets/presentation-controller.mp4'
      },
    {
      id: 3,
      title: 'Song Recommendation System',
      description: 'A song recommendation system that suggests songs similar to the song you ask. The project is build using Angular for frontend and Python with Supabase for backend. The recommendation algorithm is based on KMeans clustering, which groups songs based on their features to provide accurate recommendations.',
      techStack: ['Angular', 'Python', 'Supabase'],
      code:'https://github.com/shivani1410/Song-Recommendation.git',
      video:'assets/song-recommendation.mp4'
     }
     ,
    {
      id: 4,
      title: 'Medical ChatBot',
      description: 'Medical Chatbot is an assistant which answers queries related to medical symptoms, user can ask about their disease by mentioning their symptoms.The project is built using Streamlit, Langchain and llama. The chatbot uses Vanilla RAG to provide accurate and relevant answers to medical queries. The system also able to query the database to fetch relevant information based on user queries.',
      techStack: ['Streamlit', 'Python', 'Langchain'],
      code:'https://github.com/shivani1410/Medical-Chat-Bot.git',
      video:'assets/medical-chatbot.mp4'
     }
     ,
    {
      id: 5,
      title: 'Airport VR Simulation',
      description: 'Airport VR gives a virtual tour of a fictional Airport. The project is built using Unity, Langchain and llama. The simulation provides an immersive experience of navigating through an airport environment, including check-in counters, security checks, boarding gates, and lounges. This project was developed as part of my coursework for certification in AR/VR from IIT Delhi. ',
      techStack: ['Unity', 'Blender'],
      video:'assets/airport-vr.mp4'
     }
  ];

  selectedProject!: Project;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.loadProject();
  }

  loadProject() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedProject = this.projects.find(p => p.id === id) || this.projects[0];
  }

  navigateToProject(project: Project) {
    this.router.navigate(['/project', project.id]);
    this.selectedProject = project;
  }
  @ViewChild('projectVideo', { static: false }) videoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
     const video = this.videoRef.nativeElement;
    video.playbackRate = 2.0; // 👈 Increase playback speed (1.0 = normal, 1.5 = 1.5x faster)
    video.muted = true;
    Prism.highlightAll();
  }
}


// import streamlit as st
// from pathlib import Path
// import os
// import sqlite3
// from datasets import load_dataset
// from langchain_community.utilities import SQLDatabase
// from langchain_community.agent_toolkits import SQLDatabaseToolkit
// from langchain_community.agent_toolkits.sql.base import create_sql_agent
// from langchain_community.utilities.sql_database import SQLDatabase
// from langchain_classic.agents.agent_types import AgentType
// from langchain_community.callbacks.streamlit.streamlit_callback_handler import StreamlitCallbackHandler
// # from langchain.agents.langchain_community import SQLDatabaseToolkit
// from sqlalchemy import create_engine
// from langchain_groq import ChatGroq
// from langchain.chains.history_aware_retriever import create_history_aware_retriever
// from langchain_classic.chains.retrieval import create_retrieval_chain
// from langchain_classic.chains.combine_documents.stuff import create_stuff_documents_chain
// from langchain_community.chat_message_histories.in_memory import ChatMessageHistory
// from langchain_core.chat_history import BaseChatMessageHistory
// from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
// from langchain_core.runnables.history import RunnableWithMessageHistory
// from langchain_huggingface import HuggingFaceEmbeddings
// from langchain_text_splitters import RecursiveCharacterTextSplitter
// from langchain_astradb import AstraDBVectorStore
// from langchain.schema import Document
// import sqlitecloud