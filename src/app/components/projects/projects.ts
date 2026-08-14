import { Component, inject, signal, computed } from '@angular/core';
import { PortfolioConfigService } from '../../services/portfolio-config.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  private configService = inject(PortfolioConfigService);

  activeFilter = signal('all');

  private allProjects = computed(() => this.configService.config()?.projects ?? []);

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    const projects = this.allProjects();
    return f === 'all' ? projects : projects.filter(p => p.category === f);
  });

  setFilter(filter: string) { this.activeFilter.set(filter); }
}
