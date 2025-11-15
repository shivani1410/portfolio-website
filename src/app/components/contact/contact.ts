import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
   username: string = '';
  email: string = '';
  message: string = '';
sendEmail() {
 
  emailjs.send(
    'service_cy8roh2',
    'template_zko3pcr',
    {
      from_name: this.username,
      reply_to: this.email,
      message: this.message,
    },
    'BA4SLGEc1vZGO5W9F'
  )
  .then(() => alert("Message sent!"))
  .catch(() => alert("Failed to send"));
}
}
