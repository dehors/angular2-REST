import { Angular2RESTPage } from './app.po';

describe('angular2-rest App', function() {
  let page: Angular2RESTPage;

  beforeEach(() => {
    page = new Angular2RESTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
