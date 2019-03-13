//to do - the main Application that would be rendered in the index.html of the public folder
// this app should display all the other components as Links and onclick should route to the specific component

import React, { Component } from 'react';
import './css/main.css';
import Routes from './router.js';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './css/fonts.css';
import './css/svg.css';

const navMenu = [
  { name: 'Home', path: '' },
  { name: 'Icon Library', path: '/icon-world' },
  { name: 'Add Service Acordion', path: 'AddServAccordion' },
  { name: 'Accordion With Multi Selections', path: 'AccordionWithMultiSelections' },
  { name: 'Address Selector', path: 'AddressSelector' },
  { name: 'Additional Services', path: 'AdditionalServices' },
  { name: 'BackUp EVC', path: 'backupEVC' },
  { name: 'Multi Site option', path: 'multisiteoption' },
  { name: 'AdvancedGenericSearch', path: 'AdvancedGenericSearch' },
  { name: 'Advanced Search', path: 'AdvancedSearch' },
  { name: 'Alert Message', path: 'alertmessages' },
  { name: 'Attachments List', path: 'AttachmentsList' },
  { name: 'Awaiting Bubble', path: 'awaitingBubble' },
  { name: 'Bill Details Accordion', path: 'BillDetailsAccordion' },
  { name: 'Buttons', path: 'buttons' },
  { name: 'Carousel List', path: 'CarouselList' },
  { name: 'Composite Component', path: 'compositecomponent' },
  { name: 'Check Box', path: 'checkBox' },
  { name: 'Choose column', path: 'ChooseColumn' },
  { name: 'Chat Bubble', path: 'ChatBubble' },
  { name: 'DatePicker', path: 'CustomDatePicker' },
  { name: 'DateTimePicker', path: 'CustomDateTimePicker' },
  { name: 'Dial', path: 'Dial' },
  { name: 'DialReverse', path: 'DialReverse' },
  { name: 'DropDown Button', path: 'DropDownButton' },
  { name: 'DropDown with Filter', path: 'DropDownFilter' },
  { name: 'DropDown With Viewing Label', path: 'DropDownWithViewingLabel' },
  { name: 'Escalation Matrix', path: 'EscalationMatrix' },
  { name: 'Escalation Timeline', path: 'EscalationTimeline' },
  { name: 'Export Results', path: 'exportResults' },
  { name: 'File Upload', path: 'dropUploadFile' },
  { name: 'Filter', path: 'Filter' },
  { name: 'Filter With Overlay', path: 'FilterWithOverlay' },
  { name: 'Float Nav', path: 'FloatNav' },
  { name: 'GenericForm Accordion', path: '/GenericFormAccordion' },
  { name: 'Generic Search', path: 'GenericSearch' },
  { name: 'Help Link Overlay', path: 'HelpLinkOverlay' },
  { name: 'Icon With Title', path: 'IconWithTitle' },
  { name: 'Label', path: '/label' },
  { name: 'Lava lamp', path: 'lavalamp' },
  { name: 'Link', path: '/link' },
  { name: 'Link Tile', path: 'LinkTile' },
  { name: 'Link Tile With BusinessService', path: 'LinkTileWithBusinessService' },
  { name: 'TestComponent', path: 'TestComponent' },
  { name: 'ListToggle', path: 'ListToggle' },
  { name: 'Loader', path: 'loader' },
  { name: 'Multi Table Accordion', path: 'MultiTableAccordion' },
  { name: 'MSP Bearer Accordion', path: 'MSPBearerAccordion' },
  { name: 'overlay', path: 'Overlay' },
  { name: 'Overlay Form', path: 'overlayForm' },
  { name: 'Pagination', path: 'Pagination' },
  { name: 'Priority Cards', path: 'priorityCards' },
  { name: 'Range Slider', path: 'RangeSlider' },
  { name: 'Radio Accordion', path: 'RadioAccordion' },
  { name: 'Radio Button', path: 'RadioButton' },
  { name: 'Radio Button Units', path: 'RadioButtonUnits' },
  { name: 'Refresh', path: 'Refresh' },
  { name: 'Result Count', path: 'ResultCount' },
  { name: 'Rich Text Box', path: 'RichTextBox' },
  { name: 'Select DropDown', path: 'SelectDropDown' },
  { name: 'Share Quote', path: 'Share_Quote' },
  { name: 'Simple Accordion', path: 'SimpleAccordion' },
  { name: 'Simple DropDown', path: 'SimpleDropDown' },
  { name: 'Static Accordion', path: 'StaticAccordion' },
  { name: 'Summary Service Site', path: 'SummaryServiceSite' },
  { name: 'Step Tracker', path: 'stepTracker' },
  { name: 'Summary Accordion', path: 'SummaryAccordion' },
  { name: 'Summary Validation', path: 'SummaryValidation' },
  { name: 'Switch', path: 'switch' },
  { name: 'Tabbed buttons', path: 'tabbedbuttons' },
  { name: 'Table Action Images', path: 'TableActionImages' },
  { name: 'Table Accordion', path: 'TableAccordion' },
  { name: 'Table List', path: 'tableGrid' },
  { name: 'Text Field', path: 'textFieldComponent' },
  { name: 'Textarea', path: 'textarea' },
  { name: '3D Accordion', path: 'ThreeDAccordion' },
  { name: 'SortBy Field', path: 'sortByField' },
  { name: 'Zero Count', path: 'ZeroCount' },
  { name: 'No Service', path: 'NoService' },
  { name: 'Error', path: 'Error' }

  // { name: 'Button With Icon', path: 'buttonWithIcon' },
  // { name: 'Carousel List', path: 'CarouselList' },
  // // { name: 'Category Search', path: 'CategorySearch' },
  // { name: 'Check Box', path: 'checkBox' },
  // { name: 'Choose column', path: 'ChooseColumn' },

  // { name: 'Dial', path: '/Dial' },
  // { name: 'DropDown Button', path: 'DropDownButton' },
  // { name: 'Filter', path: 'filter' },
  // { name: 'Float Nav', path: 'FloatNav' },
  // { name: 'Journey Launcher', path: 'JourneyLauncher' },
  // { name: 'Lava lamp', path: 'lavalamp' },
  // { name: 'Loader', path: 'loader' },
  // { name: 'Link', path: 'link' },

  // { name: 'Pagination', path: 'Pagination' },

  // { name: 'Radio Button', path: 'RadioButton' },
  // { name: 'Simple Dropdown', path: 'SimpleDropDown' },
  // { name: 'Step Tracker', path: 'stepTracker' },
  // { name: 'Switch', path: 'Switch' },
  // { name: 'Table Grid', path: 'tableGrid' },
  // { name: 'TableActionImage', path: 'tableActionImage' },
  // { name: 'Class Service Accordion', path: 'threedaccordion' },
  // { name: 'File Upload', path: 'dropUploadFile' },
  // { name: 'Form Accordion', path: 'generic_form_accordion' },
  // { name: 'Bill Details Accordion', path: 'bill_details_accordion' },
  // { name: 'Form Accordion(No Toggle)', path: 'show_form_accordion' },
  // { name: 'Share Quote', path: 'Share_Quote' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LauncherItems: {}
    };
  }

  render() {
    const navItems = navMenu.map((item, i) => (
      <li key={i} className={`documentation__navigation-item ${i === 0 ? 'hide-element' : ''}`}>
        <NavLink className='documentation__navigation-link' to={item.path} exact activeStyle={{ color: '#e60000' }}>
          {item.name}
        </NavLink>
      </li>
    ));
    return (
      <div className='App'>
        <Router>
          <div id='content' className='content'>
            <a href='#' className='brand'>
              <span className='brand__rhombus' />
              <b className='vlogo-icon' />
              {/*<img src="{Layout.defaultProps.srcPath}" alt="Vodafone logo" className="brand__logo" />*/}
            </a>
            <h1 className='main_heading'>React Components V2.0.0</h1>

            <div className='page--docs'>
              <div className='spring'>
                <div className='section section--gutter'>
                  <div className='grid grid--gutter'>
                    <div className='grid__item grid__item--gutter grid__item--sm-1/1 grid__item--1/4'>
                      <div className='link-wrapper'>
                        <h1>Patterns »</h1>
                        <ul className='documentation__navigation ng-scope'>{navItems}</ul>
                      </div>
                    </div>

                    <div className='grid__item grid__item--gutter grid__item--sm-1/1 grid__item--3/4 m-t-60'>
                      <Routes />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
