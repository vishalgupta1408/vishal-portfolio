import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  activeJob = signal(0);

  experiences = [
    {
      period: 'Nov 2023 – Present',
      title: 'Software Developer',
      company: 'ANR Software Pvt. Ltd.',
      location: 'Noida, UP',
      badge: 'Current',
      points: [
        'Developed backend services for order management and checkout handling 5,000+ daily transactions using Java and Spring Boot.',
        'Integrated Stripe and PlumPay payment gateway APIs supporting 10,000+ monthly digital transactions with secure validation.',
        'Implemented backend workflows for loyalty programs, gift cards, OTP verification and notifications — improving checkout success rate by 30%.',
        'Optimized MySQL/PostgreSQL queries improving transaction performance by 35%.',
        'Automated CI/CD pipelines using GitHub Actions and Jenkins, reducing deployment time by 40%.',
        'Maintained and enhanced Plum POS backend including order creation, billing, and reconciliation modules.',
        'Built backend modules for the Plum Catering platform, supporting 500+ monthly catering orders.',
        'Collaborated with cross-functional QA, DevOps, and Product teams in Agile ceremonies.',
        'Recognised as Employee of the Month — April 2025 for exceptional delivery and ownership.',
      ],
      tags: ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Stripe', 'Jenkins', 'GitHub Actions', 'REST APIs', 'Agile']
    }
  ];
}
