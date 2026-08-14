import { Component, inject, signal } from '@angular/core';
import { PortfolioConfigService } from '../../services/portfolio-config.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  private configService = inject(PortfolioConfigService);

  activeJob = signal(0);

  get experiences() { return this.configService.config()?.experience ?? []; }
}
