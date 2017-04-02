import { YotalcualPage } from './app.po';

describe('yotalcual App', () => {
  let page: YotalcualPage;

  beforeEach(() => {
    page = new YotalcualPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
