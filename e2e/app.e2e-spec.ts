import { BorisborisovPage } from './app.po';

describe('borisborisov App', function() {
  let page: BorisborisovPage;

  beforeEach(() => {
    page = new BorisborisovPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
