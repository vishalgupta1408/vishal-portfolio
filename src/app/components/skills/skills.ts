import { Component, AfterViewInit, ElementRef, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements AfterViewInit {
  animated = signal(false);

  skillCategories = [
    {
      title: 'Backend & Frameworks', icon: 'fas fa-server',
      skills: [
        { name: 'Java',            level: 92, color: 'linear-gradient(90deg,#f89820,#e37d00)' },
        { name: 'Spring Boot',     level: 88, color: 'linear-gradient(90deg,#6db33f,#4a9a2c)' },
        { name: 'Spring Framework',level: 85, color: 'linear-gradient(90deg,#6db33f,#4a9a2c)' },
        { name: 'REST APIs',       level: 90, color: 'linear-gradient(90deg,#00d4ff,#0099cc)' },
        { name: 'Hibernate / JPA', level: 80, color: 'linear-gradient(90deg,#c23e3e,#962e2e)' },
      ]
    },
    {
      title: 'Databases', icon: 'fas fa-database',
      skills: [
        { name: 'MySQL',             level: 88, color: 'linear-gradient(90deg,#00758f,#005a6e)' },
        { name: 'PostgreSQL',        level: 85, color: 'linear-gradient(90deg,#336791,#244f73)' },
        { name: 'Query Optimization',level: 82, color: 'linear-gradient(90deg,#7b2fff,#5a1fd6)' },
        { name: 'Data Modeling',     level: 78, color: 'linear-gradient(90deg,#7b2fff,#5a1fd6)' },
      ]
    },
    {
      title: 'DevOps & Tools', icon: 'fas fa-cogs',
      skills: [
        { name: 'Git / GitHub', level: 90, color: 'linear-gradient(90deg,#f05032,#c73f2a)' },
        { name: 'Jenkins CI/CD',level: 78, color: 'linear-gradient(90deg,#d33833,#b42e29)' },
        { name: 'AWS S3',       level: 72, color: 'linear-gradient(90deg,#ff9900,#cc7a00)' },
        { name: 'Maven',        level: 80, color: 'linear-gradient(90deg,#c71a36,#a01028)' },
      ]
    },
    {
      title: 'Frontend & Web', icon: 'fas fa-code',
      skills: [
        { name: 'Angular 21+', level: 70, color: 'linear-gradient(90deg,#dd0031,#c3002f)' },
        { name: 'JavaScript', level: 65, color: 'linear-gradient(90deg,#f7df1e,#d4b800)' },
        { name: 'HTML / CSS', level: 72, color: 'linear-gradient(90deg,#e44d26,#cc3e1a)' },
      ]
    }
  ];

  tools = [
    { name: 'Postman',        icon: 'fas fa-paper-plane' },
    { name: 'JIRA',           icon: 'fab fa-jira' },
    { name: 'Stripe',         icon: 'fab fa-stripe' },
    { name: 'GitHub Actions', icon: 'fab fa-github' },
    { name: 'Docker',         icon: 'fab fa-docker' },
    { name: 'IntelliJ IDEA',  icon: 'fas fa-laptop-code' },
    { name: 'Linux',          icon: 'fab fa-linux' },
    { name: 'Agile/Scrum',    icon: 'fas fa-sync' },
    { name: 'C++',            icon: 'fas fa-terminal' },
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setTimeout(() => this.animated.set(true), 200);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    const section = this.el.nativeElement.querySelector('.skills-section');
    if (section) observer.observe(section);
  }
}
