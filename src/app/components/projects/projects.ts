import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  activeFilter = signal('all');

  allProjects = [
    { title:'PetroManage — Petrol Pump SaaS', icon:'fas fa-gas-pump', type:'personal', typeLabel:'Personal Project', featured:true,
      description:'Multi-tenant SaaS platform for petrol pump management with subscription-based access, daily sales tracking, inventory control, and staff dashboards.',
      highlights:['Multi-tenant architecture with Spring Boot + Angular 21','Subscription-gated feature access with role-based permissions','Real-time sales, inventory, and shift reporting','Dockerized deployment with docker-compose'],
      tags:['Java','Spring Boot','Angular 21','MySQL','Docker','Multi-tenant'], github:'https://github.com/vishalgupta1408', live:null, category:'personal' },

    { title:'DB Difference Portal', icon:'fas fa-code-branch', type:'personal', typeLabel:'Personal Project', featured:true,
      description:'Developer productivity tool that compares two database schemas (dev vs prod) and generates a visual diff report with ALTER script generation.',
      highlights:['Schema comparison for MySQL & PostgreSQL','Visual diff with color-coded changes','Auto-generate ALTER scripts to sync schemas','REST API backend for CI/CD schema validation'],
      tags:['Java','Spring Boot','MySQL','PostgreSQL','REST API','Schema Diff'], github:'https://github.com/vishalgupta1408', live:null, category:'personal' },

    { title:'Item Recommendation Engine', icon:'fas fa-brain', type:'professional', typeLabel:'Professional', featured:true,
      description:'ML-powered backend recommendation engine suggesting menu items based on order history and behavioral patterns for the Plum Ordering platform.',
      highlights:['Collaborative filtering + content-based algorithms','Real-time recommendation REST APIs','Optimized via indexed PostgreSQL views','Increased average order value significantly'],
      tags:['Java','Spring Boot','PostgreSQL','Machine Learning','REST APIs'], github:null, live:null, category:'professional' },

    { title:'Plum Ordering Platform', icon:'fas fa-shopping-cart', type:'professional', typeLabel:'Professional', featured:false,
      description:'End-to-end backend for the Plum Ordering platform — 5,000+ daily transactions with Stripe and PlumPay payment integrations.',
      highlights:['Order lifecycle: checkout, payment, tracking','Stripe & PlumPay integration — 10K+ monthly payments','Loyalty, gift cards, OTP, and notification workflows','30% checkout success rate improvement'],
      tags:['Java','Spring Boot','PostgreSQL','Stripe','PlumPay'], github:null, live:null, category:'professional' },

    { title:'Plum POS System', icon:'fas fa-cash-register', type:'professional', typeLabel:'Professional', featured:false,
      description:'RESTful backend APIs for Plum POS — billing, order management, and daily reconciliation workflows for restaurant operators.',
      highlights:['Order creation, billing, and reconciliation','35% faster DB performance via query optimisation','Indexed strategies for high-throughput POS operations'],
      tags:['Java','Spring Boot','REST APIs','PostgreSQL'], github:null, live:null, category:'professional' },

    { title:'Plum Catering Platform', icon:'fas fa-utensils', type:'professional', typeLabel:'Professional', featured:false,
      description:'Backend modules for bulk catering order scheduling and admin workflows, supporting 500+ monthly catering orders with zero downtime.',
      highlights:['Bulk catering order scheduling engine','500+ monthly orders — zero downtime SLA','Jenkins CI/CD for reliable releases'],
      tags:['Java','Spring Boot','PostgreSQL','Jenkins'], github:null, live:null, category:'professional' },
  ];

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    if (f === 'all') return this.allProjects;
    return this.allProjects.filter(p => p.category === f);
  });

  setFilter(filter: string) { this.activeFilter.set(filter); }
}
