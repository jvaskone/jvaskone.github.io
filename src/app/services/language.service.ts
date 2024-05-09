import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: string = "en"; 

  constructor(public translateService: TranslateService,
    private location: Location) { }

  initLanguage() {
    this.translateService.addLangs(["en", "hu"]);

    let language = navigator.language || (navigator as any).userLanguage;
    language = language.split("-").includes("hu") ? "hu" : "en";
    
    this.translateService.setDefaultLang(language);

    this.translateService.use(language);

    //this.location.go(language);
    this.language = language;
  }

  changeLanguage(language:string){
    this.translateService.setDefaultLang(language);
    this.location.go(language);
    this.language=language;
  }
}
