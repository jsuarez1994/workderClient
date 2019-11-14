import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(Constants.LANGUAJE_ES);
  }
}
