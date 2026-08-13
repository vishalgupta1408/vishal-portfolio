import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  quickInfo = [
    { icon: 'fas fa-map-marker-alt', text: 'Saharanpur, UP, India' },
    { icon: 'fas fa-briefcase',      text: 'ANR Software Pvt. Ltd.' },
    { icon: 'fas fa-graduation-cap', text: 'B.Tech IT — CGPA 8.34' },
    { icon: 'fas fa-phone',          text: '+91-8958135721' },
  ];

  highlights = [
    { icon: 'fas fa-bolt',       title: 'Performance Focused',    desc: 'Optimized MySQL/PostgreSQL queries delivering 35% faster transaction processing.' },
    { icon: 'fas fa-shield-alt', title: 'Payment Integrations',  desc: 'Stripe & PlumPay integration supporting 10K+ monthly digital transactions securely.' },
    { icon: 'fas fa-rocket',     title: 'CI/CD Automation',      desc: 'Jenkins & GitHub Actions pipelines reducing deployment time by 40%.' },
  ];
}
