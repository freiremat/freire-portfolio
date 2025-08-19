import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, ButtonModule],
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.css']
})
export class LanguageToggleComponent implements OnInit {

  languages = [
    { label: 'English (US)', value: 'en', flag: 'us' },
    { label: 'Português (BR)', value: 'pt', flag: 'br' }
  ];

  selectedLanguage: string = 'en';

  ngOnInit() { }
}