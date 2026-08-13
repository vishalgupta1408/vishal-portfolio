import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isScrolled = signal(false);
  menuOpen = signal(false);

  navItems = [
    { num: '01.', label: 'About',      href: '#about' },
    { num: '02.', label: 'Skills',     href: '#skills' },
    { num: '03.', label: 'Experience', href: '#experience' },
    { num: '04.', label: 'Projects',   href: '#projects' },
    { num: '05.', label: 'Contact',    href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() { this.isScrolled.set(window.scrollY > 60); }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu()  { this.menuOpen.set(false); }
}
