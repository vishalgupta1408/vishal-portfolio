import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PortfolioConfigService } from '../../services/portfolio-config.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  private configService = inject(PortfolioConfigService);

  submitted = signal(false);
  form = { name: '', email: '', subject: '', message: '' };

  get contactLinks() { return this.configService.config()?.contact?.links ?? []; }

  sendMessage() {
    const { name, email, subject, message } = this.form;
    const toEmail = this.configService.config()?.contact?.email ?? '';
    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`)}`;
    window.open(mailtoLink);
    this.submitted.set(true);
    setTimeout(() => {
      this.submitted.set(false);
      this.form = { name: '', email: '', subject: '', message: '' };
    }, 3000);
  }
}
