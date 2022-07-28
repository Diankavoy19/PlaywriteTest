exports.Filter =class Filter {
    constructor(page) {
        this.page = page;
        this.TaskLink = page.locator('#main-menu [href$="/issues"]');
        this.AddFilters = page.locator('#add_filter_select');
        this.AddFilterPriority = page.locator('#values_priority_id_1');
        this.AddFilterCategory = page.locator('#values_category_id_1');
        this.ApplyButton = page.locator('p.buttons [href="#"]');
        this.FirstTask = page.locator('td.id [href="/issues/36256"]');
        this.TextOfFirstTask = page.locator('div.subject h3');
      };
      async click(Element) {
        await Element.click({force: true, noWaitAfter: false});
        await this.page.waitForLoadState("networkidle")
      }
      async navigate() {
        await this.page.goto('https://www.redmine.org/');
      };
      async hovertolocator(Element) {
        await Element.scrollIntoViewIfNeeded();
      }
      async chooseLabelInDropdown(dropdown, label) {
        await this.page.waitForSelector(dropdown);
        let dropdownEl = await this.page.$(dropdown);
        await dropdownEl.selectOption({ label: label });
    }

    async chooseIndexInDropdown(dropdown, index) {
        await dropdown.selectOption({ index: index });
    }

    async chooseIndexInFilterMenu(index) {
      await this.page.waitForSelector('#add_filter_select');
      let dropdownEl = await this.page.$('#add_filter_select');
      await dropdownEl.selectOption({ index: index });
  }
};