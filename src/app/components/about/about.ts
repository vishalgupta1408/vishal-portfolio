import { Component, inject } from '@angular/core';
import { PortfolioConfigService } from '../../services/portfolio-config.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  private configService = inject(PortfolioConfigService);

  get quickInfo()  { return this.configService.config()?.about?.quickInfo  ?? []; }
  get highlights() { return this.configService.config()?.about?.highlights ?? []; }
}
