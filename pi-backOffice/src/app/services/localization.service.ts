// src/app/services/localization.service.ts
import { Injectable } from '@angular/core';
import * as translationData from '../../assets/i18n/translations.json';
import { Translations, LanguageData } from '../model/translations';

const translations: Translations = translationData as Translations; // Explicit type assertion

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
    private currentLang: string = 'en';  // Default language

    constructor() {
        this.detectLanguage();
    }

    private detectLanguage(): void {
        const browserLang = navigator.language.split('-')[0];
        this.currentLang = translations[browserLang] ? browserLang : 'en';
    }

    public translate(key: string): string {
        const languageData = translations[this.currentLang] as LanguageData;
        return languageData[key] || `Key "${key}" not found in "${this.currentLang}" translations.`;
    }



public setLanguage(lang: string): void {
  this.currentLang = lang;
}



}
