export class Bootstrap4Angular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bootstrap4-angular2-app p')).getText();
  }
}
