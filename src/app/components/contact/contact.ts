import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
