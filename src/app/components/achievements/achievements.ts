import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss'
})
export class Achievements {
  achievements = [
    { icon:'fas fa-trophy', date:'April 2025', title:'Employee of the Month', org:'ANR Software Pvt. Ltd., Noida',
      description:'Awarded for exceptional ownership, timely delivery of critical backend modules, and consistent high-quality contributions. Acknowledged by management for proactive problem-solving and cross-team collaboration that improved overall platform reliability.',
      badgeText:'🏆 Top Performer' },
    { icon:'fas fa-users', date:'2019 – 2023', title:'Member, Computer Society of India', org:'Meerut Institute of Engineering & Technology',
      description:'Active member of the CSI student chapter, participating in technical workshops, coding events, and seminars focused on software development and emerging technologies.',
      badgeText:'💡 CSI Member' },
  ];

  stats = [
    { icon:'fas fa-code',         value:'5K+',  label:'Daily Transactions Handled' },
    { icon:'fas fa-bolt',         value:'35%',  label:'DB Performance Boost' },
    { icon:'fas fa-rocket',       value:'40%',  label:'Faster Deployments' },
    { icon:'fas fa-check-circle', value:'30%',  label:'Checkout Success Rate Up' },
    { icon:'fas fa-credit-card',  value:'10K+', label:'Monthly Digital Payments' },
    { icon:'fas fa-star',         value:'8.34', label:'B.Tech CGPA' },
  ];
}
