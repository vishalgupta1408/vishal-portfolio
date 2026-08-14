import { Component, inject } from '@angular/core';
import { PortfolioConfigService } from '../../services/portfolio-config.service';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss'
})
export class Achievements {
  private configService = inject(PortfolioConfigService);

  get achievements() { return this.configService.config()?.achievements?.items ?? []; }
  get stats()        { return this.configService.config()?.achievements?.stats  ?? []; }
}
