import { SmartHockeyManagerPage } from './app.po';

describe('smart-hockey-manager App', () => {
  let page: SmartHockeyManagerPage;

  beforeEach(() => {
    page = new SmartHockeyManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
