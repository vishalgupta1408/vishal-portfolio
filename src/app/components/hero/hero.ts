import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit, OnDestroy {
  displayText = signal('');
  isTyping = signal(true);

  private roles = ['scalable APIs.', 'microservices.', 'payment systems.', 'backend magic.', 'robust databases.'];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  techBadges = ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'AWS S3', 'Jenkins', 'REST APIs', 'Git'];

  ngOnInit() { this.timer = setTimeout(() => this.typeWriter(), 1000); }

  typeWriter() {
    const current = this.roles[this.roleIndex];
    if (!this.isDeleting) {
      this.displayText.set(current.substring(0, this.charIndex + 1));
      this.charIndex++;
      this.isTyping.set(true);
      if (this.charIndex === current.length) {
        this.isTyping.set(false);
        this.timer = setTimeout(() => { this.isDeleting = true; this.typeWriter(); }, 1800);
        return;
      }
    } else {
      this.displayText.set(current.substring(0, this.charIndex - 1));
      this.charIndex--;
      this.isTyping.set(true);
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.typeWriter(), this.isDeleting ? 60 : 100);
  }

  ngOnDestroy() { if (this.timer) clearTimeout(this.timer); }
}
