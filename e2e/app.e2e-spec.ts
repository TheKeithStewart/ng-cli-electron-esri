import { ElectronMapPage } from './app.po';

describe('electron-map App', () => {
  let page: ElectronMapPage;

  beforeEach(() => {
    page = new ElectronMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
