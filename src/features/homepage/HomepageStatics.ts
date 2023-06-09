export const HOMEPAGE_STATICS = {
  TITLE: 'Calculate your tax',
  YEAR_SELECT: {
    label: 'Select financial year',
    placeholder: 'Select financial year',
    defaultValue: '2022',
    options: [{
      id: '2019',
      name: '2019',
    }, {
      id: '2020',
      name: '2020',
    }, {
      id: '2021',
      name: '2021',
    }, {
      id: '2022',
      name: '2022',
    }],
    ERRORS: {
      required: 'Select a financial year',
    },
  },
  INPUT_INCOME: {
    label: 'Enter total income per annum',
    placeholder: 'Enter total income',
    endDecorator: 'p.a.',
    ERRORS: {
      required: 'Enter an amount',
    },
  },
  CALCULATE_BUTTON: {
    label: 'Calculate',
  },
  CALCULATED: {
    DEFAULT_TEXT: 'Please choose the fiscal year and input your yearly income to determine the corresponding tax amount.',
    FAILED_TEXT: 'Oops! Something went wrong. Try again later on.',
    TOTAL_TAX_TEMPLATE: '{value}',
    TOTAL_TAX_LABEL: 'Yearly Tax',
    TAX_PERCENTAGE_TEMPLATE: '{value}',
    TAX_PERCENTAGE_LABEL: 'Net Percentage',
    BRACKET_RATE_TEMPLATE: '{value} %',
    BRACKET_TAX_TEMPLATE: '$ {value}',
    ADDITIONAL_LINKS: {
      SAVE_TAX: {
        label: 'Want to reduce your tax burden?',
        href: 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4466/tax-free-savings-account-tfsa-guide-individuals.html',
      },
    },
  },
};
