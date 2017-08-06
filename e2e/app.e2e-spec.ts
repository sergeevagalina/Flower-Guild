import { FlowerguildPage } from './app.po';

describe('flowerguild App', () => {
  let page: FlowerguildPage;

  beforeEach(() => {
    page = new FlowerguildPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
