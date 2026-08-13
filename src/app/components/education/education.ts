import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  education = [
    { year:'2019–2023', degree:'B.Tech in Information Technology', field:'Information Technology', institution:'Meerut Institute of Engineering & Technology, Meerut', icon:'fas fa-graduation-cap', score:'8.34', scoreLabel:'CGPA', note:'Active CSI member. Participated in technical workshops and hackathons.' },
    { year:'2019', degree:'Senior Secondary (12th)', field:'Science Stream', institution:'M D A V H S S, Saharanpur', icon:'fas fa-school', score:'78.2%', scoreLabel:'Percentage', note:null },
    { year:'2017', degree:'Secondary (10th)', field:null, institution:'M D A V H S S, Saharanpur', icon:'fas fa-book', score:'88.9%', scoreLabel:'Percentage', note:null },
  ];
}
