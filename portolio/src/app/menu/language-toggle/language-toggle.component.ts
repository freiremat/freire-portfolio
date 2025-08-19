import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule, FormsModule, CascadeSelectModule, ButtonModule],
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.css']
})
export class LanguageToggleComponent implements OnInit {

  countries: any[] | undefined;

  selectedCity: any;

  ngOnInit() {
    this.countries = [
      {
        name: 'United States',
        code: 'US',
      },
      {
        name: 'Brazil',
        code: 'BR',
      },
    ];
  }
}
