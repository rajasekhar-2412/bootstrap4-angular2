import { Bootstrap4Angular2Page } from './app.po';

describe('bootstrap4-angular2 App', function() {
  let page: Bootstrap4Angular2Page;

  beforeEach(() => {
    page = new Bootstrap4Angular2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bootstrap4-angular2 Works!');
  });
});
