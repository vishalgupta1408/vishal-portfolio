import { Component, inject } from '@angular/core';
import { PortfolioConfigService } from '../../services/portfolio-config.service';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  private configService = inject(PortfolioConfigService);

  get education() { return this.configService.config()?.education ?? []; }
}
