import { GeneralPage } from './app.po';

describe('general App', () => {
  let page: GeneralPage;

  beforeEach(() => {
    page = new GeneralPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
