import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Responsive Dashboard Design #1 | AsmrProg';

  sideMenu!: HTMLElement | null;
  menuBtn!: HTMLElement | null;
  closeBtn!: HTMLElement | null;
  darkMode!: HTMLElement | null;
  orders: any[] = [
    {
      productName: 'JavaScript Tutorial',
      productNumber: '85743',
      paymentStatus: 'Due',
      status: 'Pending',
    },
    {
      productName: 'CSS Full Course',
      productNumber: '97245',
      paymentStatus: 'Refunded',
      status: 'Declined',
    },
    {
      productName: 'Flex-Box Tutorial',
      productNumber: '36452',
      paymentStatus: 'Paid',
      status: 'Active',
    },
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.sideMenu = document.querySelector('aside');
    this.menuBtn = document.getElementById('menu-btn');
    this.closeBtn = document.getElementById('close-btn');
    this.darkMode = document.querySelector('.dark-mode');

    this.menuBtn?.addEventListener('click', () => {
      this.renderer.setStyle(this.sideMenu, 'display', 'block');
    });

    this.closeBtn?.addEventListener('click', () => {
      this.renderer.setStyle(this.sideMenu, 'display', 'none');
    });

    this.darkMode?.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode-variables');
      this.renderer.addClass(this.darkMode, 'active');
    });

    this.orders.forEach((order) => {
      const tr = document.createElement('tr');
      const trContent = `
          <td>${order.productName}</td>
          <td>${order.productNumber}</td>
          <td>${order.paymentStatus}</td>
          <td class="${
            order.status === 'Declined'
              ? 'danger'
              : order.status === 'Pending'
              ? 'warning'
              : 'primary'
          }">${order.status}</td>
          <td class="primary">Details</td>
      `;
      tr.innerHTML = trContent;
      document.querySelector('table tbody')?.appendChild(tr);
    });
  }
}
