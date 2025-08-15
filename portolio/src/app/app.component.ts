import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portolio';

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
