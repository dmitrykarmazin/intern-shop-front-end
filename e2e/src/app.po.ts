import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): object {
    return browser.get('/');
  }

  getParagraphText(): object {
    return element(by.css('app-root h1')).getText();
  }
}
