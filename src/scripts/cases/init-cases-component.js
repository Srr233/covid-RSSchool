import ProcessTableData from './cases-for-countries';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';

export default class InitCasesComponent {
  // acceptData(indicators) {

  // }

  startWork() {
    this.makePageLayout();
    this.extractData();
  }

  extractData() {
    fetch('https://corona.lmao.ninja/v2/countries').then(response => response.json()).then(data => {
      const process = new ProcessTableData(data);
      process.startProcessing();
    });
  }

  makePageLayout() {
    const pageWrapper = document.createElement('div');
    const globalCases = document.createElement('div');
    const globalCasesTxt = document.createElement('h3');
    const globalCasesVal = document.createElement('div');
    const dataTableHeader = document.createElement('h3');
    const inputWrapper = document.createElement('div');
    const dataTableWrapper = document.createElement('div');
    const arrowsWrapper = document.createElement('div');
    const lastUpdatedWrapper = document.createElement('div');
    const lastUpdatedTxt = document.createElement('div');
    const lastUpdatedValue = document.createElement('div');
    let txt = document.createTextNode('Total Cases');
    const lArrow = document.createElement('img');
    const rArrow = document.createElement('img');
    pageWrapper.classList.add('page-wrapper');
    globalCasesVal.classList.add('global-cases-value');
    globalCasesTxt.classList.add('global-cases-txt');
    globalCases.classList.add('global-cases');
    dataTableHeader.classList.add('table-header');
    inputWrapper.classList.add('input-field');
    dataTableWrapper.classList.add('table-data');
    lArrow.setAttribute('id', 'arrow-0');
    lArrow.setAttribute('src', `${leftArrow}`);
    rArrow.setAttribute('id', 'arrow-1');
    rArrow.setAttribute('src', `${rightArrow}`);
    arrowsWrapper.classList.add('arrows-wrapper');
    lastUpdatedWrapper.classList.add('last-updated-wrapper');
    lastUpdatedValue.classList.add('last-updated-value');
    lastUpdatedTxt.classList.add('last-updated-txt');
    arrowsWrapper.appendChild(lArrow);
    arrowsWrapper.appendChild(txt);
    arrowsWrapper.appendChild(rArrow);
    lastUpdatedWrapper.appendChild(lastUpdatedTxt);
    lastUpdatedWrapper.appendChild(lastUpdatedValue);
    globalCases.appendChild(globalCasesTxt);
    globalCases.appendChild(globalCasesVal);
    pageWrapper.appendChild(globalCases);
    pageWrapper.appendChild(dataTableHeader);
    pageWrapper.appendChild(inputWrapper);
    pageWrapper.appendChild(dataTableWrapper);
    pageWrapper.appendChild(arrowsWrapper);
    pageWrapper.appendChild(lastUpdatedWrapper);
    document.body.appendChild(pageWrapper);
    globalCasesTxt.textContent = 'Global Cases';
    dataTableHeader.textContent = 'Cases by Country/Region/Sovereignty';
    lastUpdatedTxt.textContent = 'Last Updated at (M/D/YYYY)';
    let inputField = document.createElement('INPUT');
    inputField.setAttribute('placeholder', 'Search');
    inputWrapper.appendChild(inputField);
  }
}
