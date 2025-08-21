import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { DescriptionComponent } from './description/description.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuComponent, DescriptionComponent, FeaturedProjectsComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    const langToUse = browserLang && browserLang.match(/en|pt/) ? browserLang : 'en';
    translate.use(langToUse);

  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
