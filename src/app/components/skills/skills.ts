import { Component, AfterViewInit, ElementRef, inject, signal } from '@angular/core';
import { PortfolioConfigService } from '../../services/portfolio-config.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements AfterViewInit {
  private configService = inject(PortfolioConfigService);

  animated = signal(false);

  get skillCategories() { return this.configService.config()?.skills?.categories ?? []; }
  get tools()           { return this.configService.config()?.skills?.tools       ?? []; }

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
