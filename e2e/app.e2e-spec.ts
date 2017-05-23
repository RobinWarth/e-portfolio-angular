import { DhbwPage } from './app.po';

describe('dhbw App', () => {
  let page: DhbwPage;

  beforeEach(() => {
    page = new DhbwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
