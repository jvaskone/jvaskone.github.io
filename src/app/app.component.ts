import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { FormControl } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, AboutComponent, PortfolioComponent, ContactComponent, TranslateModule]
})
export class AppComponent implements OnInit {
  title = 'JVSz Website';
  languageFormControl: FormControl= new FormControl();

  constructor(private translateService: TranslateService,
    private languageService: LanguageService) {
      this.languageService.initLanguage();
  }

  ngOnInit(): void {
    
  }

  changeLanguage(language: string) {
    console.log("Change language to "+language);
    this.translateService.use(language);
  }
}
