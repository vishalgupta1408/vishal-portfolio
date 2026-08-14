import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { PortfolioConfigService } from '../../services/portfolio-config.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit, OnDestroy {
  private configService = inject(PortfolioConfigService);

  displayText = signal('');
  isTyping    = signal(true);

  private roleIndex  = 0;
  private charIndex  = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  get hero()       { return this.configService.config()?.hero; }
  get techBadges() { return this.hero?.techBadges ?? []; }
  private get roles() { return this.hero?.roles ?? []; }

  ngOnInit() { this.timer = setTimeout(() => this.typeWriter(), 1000); }

  typeWriter() {
    const roles = this.roles;
    if (!roles.length) return;

    const current = roles[this.roleIndex % roles.length];
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
        this.roleIndex = (this.roleIndex + 1) % roles.length;
      }
    }
    this.timer = setTimeout(() => this.typeWriter(), this.isDeleting ? 60 : 100);
  }

  ngOnDestroy() { if (this.timer) clearTimeout(this.timer); }
}
