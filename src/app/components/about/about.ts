import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {}
