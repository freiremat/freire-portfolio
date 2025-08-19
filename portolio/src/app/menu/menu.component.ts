import { Component } from '@angular/core';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { LanguageToggleComponent } from './language-toggle/language-toggle.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ThemeToggleComponent, LanguageToggleComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

}
