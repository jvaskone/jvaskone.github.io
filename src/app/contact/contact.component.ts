import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor() {
    console.log(this.stringToHex("judit.vaskone@gmail.com"));
  }
    
  stringToHex(str: string): string {
    return str.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join('');
}  
}
