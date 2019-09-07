import { BackeryAdminPanelPage } from './app.po';

describe('backery-admin-panel App', function() {
  let page: BackeryAdminPanelPage;

  beforeEach(() => {
    page = new BackeryAdminPanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
