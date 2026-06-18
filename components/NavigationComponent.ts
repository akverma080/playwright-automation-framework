import { Page, Locator } from '@playwright/test';

export class NavigationComponent {

  constructor(private page: Page) {}

  private navMenu(): Locator {
    return this.page.locator('.wp-block-navigation__container');
  }

  private homeLink(): Locator {
    return this.page.getByRole('link', { name: 'Home' });
  }

  private menLink(): Locator {
    return this.page.getByRole('link', { name: 'For Men' });
  }

  private womenLink(): Locator {
    return this.page.getByRole('link', { name: 'For Women' });
  }

  private unisexLink(): Locator {
    return this.page.getByRole('link', { name: 'Unisex' });
  }

  private perfumeOilLink(): Locator {
    return this.page.getByRole('link', { name: 'Perfume Oil' });
  }

  private aboutLink(): Locator {
    return this.page.getByRole('link', { name: 'About' });
  }

     menuLinkByName(menuName:string): Locator{
    return  this.page.getByRole('link', {name:menuName});

}

async clickMenuLinkByName(menuName:string)  {
    
}

   async clickOnNavMenu(menuName: string) {
    await this.navMenu().click();
  }

  async clickHome() {
    await this.homeLink().click();
  }

  async clickMen() {
    await this.menLink().click();
  }

  async clickWomen() {
    await this.womenLink().click();
  }

  async clickUnisex() {
    await this.unisexLink().click();
  }

  async clickPerfumeOil() {
    await this.perfumeOilLink().click();
  }

  async clickAbout() {
    await this.aboutLink().click();
  }
}