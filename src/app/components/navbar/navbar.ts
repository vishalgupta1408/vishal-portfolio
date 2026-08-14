import { Component, HostListener, inject, signal } from '@angular/core';
import { PortfolioConfigService } from '../../services/portfolio-config.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  private configService = inject(PortfolioConfigService);

  isScrolled = signal(false);
  menuOpen  = signal(false);

  get navbar()        { return this.configService.config()?.navbar; }
  get hireEmailHref() { return 'mailto:' + (this.configService.config()?.contact?.email ?? ''); }

  @HostListener('window:scroll')
  onScroll() { this.isScrolled.set(window.scrollY > 60); }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu()  { this.menuOpen.set(false); }
}
