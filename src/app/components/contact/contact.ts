import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  submitted = signal(false);

  form = { name:'', email:'', subject:'', message:'' };

  contactLinks = [
    { icon:'fas fa-envelope',    label:'Email',    value:'vishalgupta.vg1408@gmail.com', href:'mailto:vishalgupta.vg1408@gmail.com', external:false },
    { icon:'fas fa-phone',       label:'Phone',    value:'+91-8958135721',               href:'tel:+918958135721',                    external:false },
    { icon:'fab fa-linkedin-in', label:'LinkedIn', value:'vishal-gupta-b0817120a',       href:'https://www.linkedin.com/in/vishal-gupta-b0817120a', external:true },
    { icon:'fab fa-github',      label:'GitHub',   value:'vishalgupta1408',              href:'https://github.com/vishalgupta1408',   external:true },
    { icon:'fas fa-map-marker-alt', label:'Location', value:'Saharanpur, UP, India',    href:'#',                                    external:false },
  ];

  sendMessage() {
    const { name, email, subject, message } = this.form;
    const mailtoLink = `mailto:vishalgupta.vg1408@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Vishal,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`)}`;
    window.open(mailtoLink);
    this.submitted.set(true);
    setTimeout(() => {
      this.submitted.set(false);
      this.form = { name:'', email:'', subject:'', message:'' };
    }, 3000);
  }
}
