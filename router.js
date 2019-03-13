import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import './App.css';

import Accordion from './components/Accordion/Accordion';
//import ConfigureDevice from './components/ConfigureDevice/ConfigureDevice';
// import ConfigureDeviceData from './AppData/ConfigureDeviceData';
import AdvancedGenericSearch from './components/AdvancedGenericSearch/AdvancedGenericSearch';
import AdvancedSearch from './components/AdvancedSearch/AdvancedSearch';
import MultiSiteOptionData from './AppData/MultiSiteOptionData';
import AlertMessage from './components/AlertMessage/AlertMessage';
import Button from './components/Button/button';
import CarouselList from './components/carousel_list/carousel_list';
import CustomDatePicker from './components/DayPicker/CustomDayPicker';
import ChatBubble from './components/ChatBubble/ChatBubble';
import ChatBubbleData from './AppData/ChatBubbleData';
import DropDownButtons from './components/DropdownButton/DropDownButton';
import FileUpload from './components/FileUpload/FileUpload';
import Filter from './components/Filter/FilterComponent';
import FilterData from './AppData/FilterData';
import EmailID from './components/AdditionOfEmailID/EmailID';
import GenericSearch from './components/GenericSearch/GenericSearch';
import Overlay from './components/overlay/overlay';
import OverlayForm from './components/OverlayForm/OverlayForm';
import PriorityCards from './components/PriorityCards/priorityCardsComponent';
import DropdownComponent from './components/SimpleDropDown/SimpleDropDown';
import FilterDropdown from './components/DropDownFilter/DropDownFilter';
import AddressSelector from './components/AddressSelector/AddressSelector';
import StepTracker from './components/StepTracker/stepTrackerComponent';
import RadioButton from './components/RadioButton/RadioButton';
import RadioButtonData from './AppData/RadioButtonData';
import CheckBoxData from './AppData/checkBoxData';
import CheckBox from './components/CheckBox/checkBox';
import Pagination from './components/Pagination/Pagination';
import LavaLamp from './components/LavaLamp/LavaLampComponent';
import TableActionImage from './components/TableActionImage/TableActionImage';
import Loader from './components/Loader/loaderComponent';
import FloatNav from './components/FloatNav/FloatNav';
import ResultCount from './components/ResultsCount/ResultsCount';
import SimpleAccordionData from './AppData/simpleAccordionData';
import RadioAccordionData from './AppData/RadioAccordionData';
import BearerAccordionData from './AppData/BearerAccordionData';
import floatNavData from './AppData/FloatNavData';
import AdditionalServicesData from './AppData/AdditionalServicesData';
import MultiTablesAccordionData from './AppData/MultiTablesAccordionData';
import staticAccordionData from './AppData/staticAccordionData';
import MultiSelectAccordionData from './AppData/MultiSelectionAccordionData';
import advancedGenericSearchdata from './AppData/advancedGenericSearchdata';
import advancedSearchData from './AppData/advancedSearchData';
import AlertMessageData from './AppData/AlertMessageData';
import buttonData from './AppData/buttonData';
import CustomDatePickerData from './AppData/DatePickerData';
import dropDownButtonData from './AppData/DropDownButtonData';
import FileUploadData from './AppData/FileUploadData';
import GenericSearchData from './AppData/GenericSearchData';
import overlayData from './AppData/overlayData';
import overlayFormData from './AppData/overlayFormData';
import priorityCardsData from './AppData/priorityCardsData';
import ResultsCountData from './AppData/resultsCountData';
import productCardsData from './AppData/productCardsData';
import addressSelectorData from './AppData/addressSelectorData';
import stepTrackerData from './AppData/stepTrackerData';
import simpleDropDownData from './AppData/simpleDropDownData';
import TableImageData from './AppData/TableImageData';
import TextField from './components/TextField/textFieldComponent';
import TextArea from './components/TextArea/textAreaComponent';
import TabbedButtons from './components/TabbedButtons/TabbedButtons';
import textFieldData from './AppData/textFieldData';
import TextAreaData from './AppData/TextAreaData';
import TabbedButtonsData from './AppData/TabbedButtonsData';
import ThreeColumnAccordionData from './AppData/threeColumnAccordionData';
import GenericFormAccordionData from './AppData/GenericFormAccordionData';
import BillDetailsAccordionData from './AppData/BillDetailsAccordionData';
// import DetailQuoteConfigData from './AppData/DetailQuoteConfigData';
import Label from './components/Label/labelComponent';
import LabelData from './AppData/LabelData';
import Link from './components/link/Link';
import LinkData from './AppData/LinkData';
import LinkTile from './components/LinkTile/LinkTile';
import LinkTileData from './AppData/LinkTileData';
import Switch from './components/Switch/Switch';
import switchData from './AppData/SwitchData';
import PaginationData from './AppData/PaginationData';
import shareQuoteData from './AppData/ShareQuoteData';
import LavaLampData from './AppData/LavaLampData';
import SummaryAccordionData from './AppData/SummaryAccordionData';
import DialData from './AppData/DialData';
import Dial from './components/Dial/Dial';
import ChooseColumn from './components/chooseColumn/chooseColumn';
import chooseColumnDatas from './AppData/chooseColumnData';
import ExportResults from './components/ExportResults/ExportResults';
import exportResultData from './AppData/ExportResultData';
import RangeSliderData from './AppData/RangeSliderData';
import SliderTypes from './components/RangeSlider/SliderTypes';
import SummaryValidation from './components/SummaryValidation/SummaryValidation';
import summaryValidationData from './AppData/SummaryValidationData';
import { tableAccType1, tableAccType2 } from './AppData/TableAccordionData';
import SortByFieldComponent from './components/SortByField/sortByFieldComponent';
import sortByFieldData from './AppData/sortByFieldData';
import FilterWithOverlay from './components/FilterWithOverlay/FilterWithOverlay';
import FilterWithOverlayData from './AppData/FilterWithOverlayData';
import tableGridData from './AppData/TableGridData';
import TableGrid from './components/TableGrid/TableGridComponent';
import ToasterMessage from './components/ToasterMessage/toasterMessage';
import BackUpEVCAccordionData from './AppData/BackUpEVCAccordionData';
import ContextSearch from './components/ContextSearch/ContextSearch';
import ContextSearchData from './AppData/ContextSearchData';
import SelectDropDown from './components/SelectDropdown/SelectDropDown';
import SelectDropDownData from './AppData/SelectDropDownData';
import RadioButtonUnitsData from './AppData/RadioButtonUnitsData';
import RadioButtonUnits from './components/RadioButtonUnits/RadioButtonUnits';
import IconTester from './components/SvgIcons/IconTester';
import loaderData from './AppData/loaderData';
import ZeroCount from './components/ZeroCount/zeroCountComponent';
import zeroCountData from './AppData/zeroCountData';
import NoService from './components/NoService/NoService';
import noServiceData from './AppData/noServiceData';
import Error from './components/Error/error';
import errorData from './AppData/errorData';
import DialReverseData from './AppData/dialReverseData';
import DialReverse from './components/DialReverse/DialReverse';
import Refresh from './components/Refresh/Refresh';
import RefreshData from './AppData/RefreshData';
import AwaitingBubbleData from './AppData/AwaitingBubbleData';
import AwaitingBubble from './components/AwaitingBubble/AwaitingBubble';
import ListToggleData from './AppData/ListToggleData';
import ListToggle from './components/ListToggle/ListToggle';
import HelpLinkOverlay from './components/HelpLinkOverlay/HelpLinkOverlay';
import HelpLinkOverlayData from './AppData/HelpLinkOverlayData';
import DropDownWithViewingLabel from './components/DropDownWithViewingLabel/DropDownWithViewingLabel';
import DropDownWithViewingLabelData from './AppData/DropDownWithViewingLabelData';
import RichTextBox from './components/RichTextBox/RichTextBox';
import RichTextBoxData from './AppData/RichTextBoxData';
import CustomDateTimePicker from './components/DateTimePicker/CustomDateTimePicker';
import CustomDateTimePickerData from './AppData/DateTimePickerData';
import toasterMessageData from './AppData/toasterMessageData';
import EscalationMatrix from './components/EscalationMatrix/EscalationMatrix';
import EscalationMatrixData from './AppData/EscalationMatrixData';
import IconWithTitle from './components/IconWithTitle/IconWithTitle';
import IconWithTitleData from './AppData/IconWithTitleData';
import SummaryServiceSite from './components/SummaryServiceSite/SummaryServiceSite';
import summaryServiceSiteData from './AppData/SummaryServiceSiteData';
import EscalationTimeline from './components/EscalationTimeline/EscalationTimeline';
import EscalationTimeLineData from './AppData/EscalationTimelineData';
import DropDownFilterData from './AppData/DropDownFilterData';
import DropDownFilter from './components/DropDownFilter/DropDownFilter';
import AddServAccordionData from './AppData/AddServAccordionData';
import LinkTileWithBusinessServiceData from './AppData/LinkTileWithBusinessServiceData';
import LinkTileWithBusinessService from './components/LinkTileWithBusinessService/LinkTileWithBusinessService';
import AttachmentsListData from './AppData/AttachmentsListData';
import AttachmentsList from './components/AttachmentsList/AttachmentsList';
import testComponentData from './components/TestComponent/testComponentdata';
import TestComponent from './components/TestComponent/testComponent';

class Routes extends Component {
  constructor(props) {
    super(props);
    var onSubmitHandler = this.onSubmitHandler.bind(this);
    var onChange = this.onChange.bind(this);
    var onDelete = this.onDelete.bind(this);
    this.state = {
      some: { ...addressSelectorData, onSubmitHandler },
      filesData: { ...FileUploadData, onChange, onDelete }
    };
    this.val = false;
  }
  onChange(e) {
    var onChange = this.onChange.bind(this);
    var onDelete = this.onDelete.bind(this);
    var fileDetails = Object.assign({}, { files: e.value });
    this.setState({
      filesData: { ...FileUploadData, fileDetails: fileDetails, onChange, onDelete }
    });
  }
  onDelete(e) {
    var onDelete = this.onDelete.bind(this);
    var onChange = this.onChange.bind(this);
    const stateFiles = this.state.filesData.fileDetails.files.slice(0);
    const deletedFiles = stateFiles.splice(e.id, 1);
    var fileDetails = Object.assign({}, { files: stateFiles });
    this.setState({
      filesData: { ...FileUploadData, fileDetails: fileDetails, onChange, onDelete }
    });
  }
  onSubmitHandler() {
    var onSubmitHandler = this.onSubmitHandler.bind(this);
    const additionalFields = [
      {
        id: 'someExtra',
        name: 'txt1',
        title: '',
        placeholder: 'Some Extra Field',
        maxLength: 50,
        labelData: {
          id: 'extra',
          type: 'labelRequiredDefault',
          htmlFor: '',
          labelname: 'Extra Field',
          isRequired: false
        }
      }
    ];
    this.setState({
      some: {
        ...addressSelectorData,
        dropDownVisibility: true,
        onSubmitHandler,
        additionalFields: additionalFields
      }
    });
  }
  render() {
    return (
      <div className='reactcontainer'>
        <Route
          path='/'
          exact
          render={() => {
            return (
              <div>
                <h1 className='welcome-txt'>Welcome!!!</h1>
              </div>
            );
          }}
        />
        <Route
          path='/AdditionalServices'
          exact
          strict
          render={() => {
            return [
              AdditionalServicesData.AccordionData.map((AccordionData, index) => {
                return <Accordion data={AccordionData} key={AccordionData.id} length={AdditionalServicesData.length} />;
              })
            ];
          }}
        />
        <Route
          path='/AddServAccordion'
          exact
          strict
          render={() => {
            return <Accordion data={AddServAccordionData} />;
          }}
        />
        <Route
          path='/multisiteoption'
          exact
          strict
          render={() => {
            return <Accordion data={MultiSiteOptionData} />;
          }}
        />
        <Route
          path='/backupEVC'
          exact
          strict
          render={() => {
            return <Accordion data={BackUpEVCAccordionData} />;
          }}
        />
        <Route
          path='/AddressSelector'
          exact
          strict
          render={() => {
            return <AddressSelector data={this.state.some} />;
          }}
        />
        <Route
          path='/AdvancedGenericSearch'
          exact
          strict
          render={() => {
            let data = {
              ...advancedGenericSearchdata,
              advancedSearchComponentData: advancedSearchData
            };
            console.log('data', data);
            return <AdvancedGenericSearch data={data} />;
          }}
        />
        <Route
          path='/AdvancedSearch'
          exact
          strict
          render={() => {
            return <AdvancedSearch data={advancedSearchData} />;
          }}
        />
        <Route
          path='/alertmessages'
          exact
          strict
          render={() => {
            return AlertMessageData.messagedata.map((message, index) => {
              return <AlertMessage key={index} data={message} />;
            });
          }}
        />
        <Route
          path='/BillDetailsAccordion'
          exact
          strict
          render={() => {
            return <Accordion data={BillDetailsAccordionData} />;
          }}
        />
        <Route
          path='/buttons'
          exact
          render={() => {
            return [
              <div>
                {buttonData.buttondata.map((button) => {
                  return <Button key={button.type} data={button} />;
                })}
              </div>,
              <br />,
              <div>
                {buttonData.buttonWithIconData.map((button) => {
                  return <Button key={button.type} data={button} />;
                })}
              </div>
            ];
          }}
        />
        <Route
          path='/ContextSearch'
          exact
          strict
          render={() => {
            return <ContextSearch data={ContextSearchData} />;
          }}
        />
        <Route
          path='/CustomDatePicker'
          exact
          strict
          render={() => {
            return <CustomDatePicker data={CustomDatePickerData} />;
          }}
        />
        <Route
          path='/ChatBubble'
          exact
          strict
          render={() => {
            return <ChatBubble data={ChatBubbleData} />;
          }}
        />
        {/* <Route
					path="/ConfigureDevice"
					exact
					strict
					render={() => {
						return <ConfigureDevice data={ConfigureDeviceData} />;
					}}
				/> */}
        <Route
          path='/DropDownWithViewingLabel'
          exact
          strict
          render={() => {
            return <DropDownWithViewingLabel data={DropDownWithViewingLabelData} />;
          }}
        />
        {/* <Route
					path="/DetailQuote"
					exact
					strict
					render={() => {
						return <Accordion data={DetailQuoteConfigData} />;
					}}
				/> */}
        <Route
          path='/GenericFormAccordion'
          exact
          strict
          render={() => {
            return [
              <div>
                <Accordion data={GenericFormAccordionData.expandedData} />
              </div>,
              <div>
                <Accordion data={GenericFormAccordionData.nonExpanded} />
              </div>
            ];
          }}
        />
        <Route
          path='/Filter'
          exact
          render={() => {
            return <Filter data={FilterData} />;
          }}
        />
        <Route
          path='/MSPBearerAccordion'
          exact
          strict
          render={() => {
            return <Accordion data={BearerAccordionData} />;
          }}
        />
        <Route
          path='/AccordionWithMultiSelections'
          exact
          strict
          render={() => {
            return <Accordion data={MultiSelectAccordionData} />;
          }}
        />
        <Route
          path='/CarouselList'
          exact
          strict
          render={() => {
            return <CarouselList data={productCardsData} />;
          }}
        />
        <Route
          path='/DropDownButton'
          exact
          render={() => {
            return <DropDownButtons data={dropDownButtonData} />;
          }}
        />
        <Route
          path='/dropUploadFile'
          exact
          strict
          render={() => {
            return <FileUpload data={this.state.filesData} />;
          }}
        />
        <Route
          path='/GenericSearch'
          exact
          strict
          render={() => {
            return <GenericSearch data={GenericSearchData} />;
          }}
        />
        <Route
          path='/FilterWithOverlay'
          exact
          strict
          render={() => {
            return <FilterWithOverlay data={FilterWithOverlayData} />;
          }}
        />
        <Route
          path='/Overlay'
          exact
          strict
          render={() => {
            return <Overlay data={overlayData} />;
          }}
        />
        <Route
          path='/overlayForm'
          exact
          strict
          render={() => {
            return <OverlayForm data={overlayFormData} />;
          }}
        />
        <Route
          path='/priorityCards'
          exact
          strict
          render={() => {
            return [
              <Route
                path='/priorityCards'
                exact
                render={() => {
                  return [
                    <React.Fragment>
                      {Object.keys(priorityCardsData).map((cards) => [
                        priorityCardsData[cards].map((card, index) => <PriorityCards key={index} data={card} />),
                        <br />,
                        <br />
                      ])}
                    </React.Fragment>
                  ];
                }}
              />
            ];
          }}
        />
        <Route
          path='/RadioAccordion'
          exact
          strict
          render={() => {
            return <Accordion data={RadioAccordionData} />;
          }}
        />
        <Route
          path='/RangeSlider'
          exact
          strict
          render={() => {
            return <SliderTypes data={RangeSliderData} />;
          }}
        />
        <Route
          path='/Refresh'
          exact
          strict
          render={() => {
            return <Refresh data={RefreshData} />;
          }}
        />
        <Route
          path='/SimpleAccordion'
          exact
          strict
          render={() => {
            return <Accordion data={SimpleAccordionData} />;
          }}
        />
        <Route
          path='/TableActionImages'
          exact
          strict
          render={() => {
            return (
              <div className='m-l-20'>
                <h3> Table Action Menu </h3>
                {TableImageData.map((TableImage, index) => {
                  return <TableActionImage data={TableImage} key={index} />;
                })}
              </div>
            );
          }}
        />
        <Route
          path='/MultiTableAccordion'
          exact
          strict
          render={() => {
            return <Accordion data={MultiTablesAccordionData} />;
          }}
        />
        <Route
          path='/StaticAccordion'
          exact
          strict
          render={() => {
            return <Accordion data={staticAccordionData} />;
          }}
        />
        <Route
          path='/ThreeDAccordion'
          exact
          strict
          render={() => {
            return <Accordion data={ThreeColumnAccordionData} />;
          }}
        />
        <Route
          path='/SummaryAccordion'
          exact
          strict
          render={() => {
            return <Accordion data={SummaryAccordionData} />;
          }}
        />
        <Route
          path='/stepTracker'
          exact
          render={() => {
            return [
              <StepTracker key={1} data={stepTrackerData.stepTracker} />,
              <StepTracker key={2} data={stepTrackerData.orderTracker} />
            ];
          }}
        />
        <Route
          path='/tabbedbuttons'
          exact
          strict
          render={() => {
            return [
              <TabbedButtons
                data={TabbedButtonsData}
                onClickHandler={(dataPassed) => console.log('Button ID', dataPassed)}
              />
            ];
          }}
        />
        <Route
          path='/textarea'
          exact
          strict
          render={() => {
            return [ <TextArea data={TextAreaData} /> ];
          }}
        />{' '}
        <Route
          path='/textFieldComponent'
          exact
          render={() => {
            return [ <TextField data={textFieldData} /> ];
          }}
        />
        <Route
          path='/SelectDropDown'
          exact
          strict
          render={() => {
            return <SelectDropDown data={SelectDropDownData} />;
          }}
        />
        <Route
          path='/SimpleDropDown'
          exact
          strict
          render={() => {
            return [ <DropdownComponent key={1} data={simpleDropDownData} /> ];
          }}
        />
        <Route
          path='/Label'
          exact
          strict
          render={() => {
            return [
              <div style={{ padding: 5 }}>
                <h5 style={{ color: '#007c92', margin: '10px 0' }}>Label Helper Light Small</h5>
                <Label data={LabelData.labelHelper1} />
              </div>,
              <div style={{ padding: 5 }}>
                <h5 style={{ color: '#007c92', margin: '10px 0' }}>Label Helper Light Medium</h5>
                <Label data={LabelData.labelHelper2} />
              </div>,
              <div style={{ padding: 5 }}>
                <h5 style={{ color: '#007c92', margin: '10px 0' }}>Label Helper Dark Small</h5>
                <Label data={LabelData.labelHelper3} />
              </div>,
              <div style={{ padding: 5 }}>
                <h5 style={{ color: '#007c92', margin: '10px 0' }}>Label Helper Dark Medium</h5>
                <Label data={LabelData.labelHelper4} />
              </div>,
              <div style={{ padding: 5 }}>
                <h5 style={{ color: '#007c92', margin: '10px 0' }}>Label - Left</h5>
                <Label data={LabelData.labelDefault} />
              </div>,
              <div style={{ padding: 5 }}>
                <h5 style={{ color: '#007c92', margin: '10px 0' }}>Label - Center</h5>
                <Label data={LabelData.labelCenter} />
              </div>,
              <div style={{ padding: 5 }}>
                <h5 style={{ color: '#007c92', margin: '10px 0' }}>Label - Right</h5>
                <Label data={LabelData.labelRight} />
              </div>,
              <div style={{ padding: 5 }}>
                <h5 style={{ color: '#007c92', margin: '10px 0' }}>Label - Required</h5>
                <Label data={LabelData.labelRequired} />
              </div>,
              <div style={{ padding: 5 }}>
                <h5 style={{ color: '#007c92', margin: '10px 0' }}>Label Center - Required</h5>
                <Label data={LabelData.labelRequiredCenter} />
              </div>,
              <div style={{ padding: 5 }}>
                <h5 style={{ color: '#007c92', margin: '10px 0' }}>Label Right - Required</h5>
                <Label data={LabelData.labelRequiredRight} />
              </div>,
              <div style={{ padding: 5 }}>
                <h5 style={{ color: '#007c92', margin: '10px 0' }}>Left Heading with Bottom border</h5>
                <Label data={LabelData.labelHeadingDefault} />
              </div>,
              <div style={{ padding: 5 }}>
                <h5 style={{ color: '#007c92', margin: '10px 0' }}>Center Heading with Bottom border</h5>
                <Label data={LabelData.labelHeadingCenter} />
              </div>,
              <div style={{ padding: 5 }}>
                <h5 style={{ color: '#007c92', margin: '10px 0' }}>Right Heading with Bottom border</h5>
                <Label data={LabelData.labelHeadingRight} />
              </div>
            ];
          }}
        />
        <Route
          path='/RadioButton'
          exact
          render={() => {
            return <RadioButton data={RadioButtonData} />;
          }}
        />
        <Route
          path='/CheckBox'
          exact
          strict
          render={() => {
            return <CheckBox data={CheckBoxData} />;
          }}
        />
        <Route
          path='/link'
          exact
          strict
          render={() => {
            return <Link data={LinkData} />;
          }}
        />
        <Route
          path='/tableGrid'
          exact
          render={() => {
            return <TableGrid data={tableGridData} />;
          }}
        />
        <Route
          path='/Switch'
          exact
          render={() => {
            return <Switch data={switchData} />;
          }}
        />
        <Route
          path='/Pagination'
          exact
          render={() => {
            return <Pagination data={PaginationData} />;
          }}
        />
        <Route
          path='/Share_Quote'
          exact
          strict
          render={() => {
            return <EmailID data={shareQuoteData.props.data} />;
          }}
        />
        <Route
          path='/lavalamp'
          exact
          strict
          render={() => {
            return <LavaLamp data={LavaLampData} />;
          }}
        />
        <Route
          path='/Dial'
          exact
          render={() => {
            return <div>{DialData.map((dialData, index) => <Dial key={index} data={dialData} />)}</div>;
          }}
        />
        <Route
          path='/DialReverse'
          exact
          render={() => {
            return (
              <div className='dial--reverse--wrapper'>
                {DialReverseData.map((dialData, index) => <DialReverse key={index} data={dialData} />)}
              </div>
            );
          }}
        />
        <Route
          path='/Loader'
          exact
          strict
          render={() => {
            return <Loader data={loaderData} />;
          }}
        />
        <Route
          path='/ResultCount'
          exact
          strict
          render={() => {
            return <ResultCount data={ResultsCountData} />;
          }}
        />
        <Route
          path='/ChooseColumn'
          exact
          render={() => {
            return <ChooseColumn data={chooseColumnDatas} />;
          }}
        />
        <Route
          path='/exportResults'
          exact
          render={() => {
            return <ExportResults data={exportResultData} />;
          }}
        />
        <Route
          path='/FloatNav'
          exact
          strict
          render={() => {
            return <FloatNav data={floatNavData} />;
          }}
        />
        <Route
          path='/SummaryValidation'
          exact
          strict
          render={() => {
            return <SummaryValidation data={summaryValidationData} />;
          }}
        />
        <Route
          path='/TableAccordion'
          exact
          strict
          render={() => {
            return [
              <div>
                <Accordion data={tableAccType1} />
              </div>,
              <div>
                <Accordion data={tableAccType2} />
              </div>
            ];
          }}
        />
        <Route
          path='/sortByField'
          exact
          strict
          render={() => {
            return <SortByFieldComponent data={sortByFieldData} />;
          }}
        />
        <Route
          path='/awaitingBubble'
          exact
          strict
          render={() => {
            return <AwaitingBubble data={AwaitingBubbleData} />;
          }}
        />
        <Route
          path='/ListToggle'
          exact
          strict
          render={() => {
            return <ListToggle data={ListToggleData} />;
          }}
        />
        <Route
          path='/RadioButtonUnits'
          exact
          render={() => {
            return <RadioButtonUnits data={RadioButtonUnitsData} />;
          }}
        />
        <Route
          path='/icon-world'
          exact
          strict
          render={() => {
            return <IconTester />;
          }}
        />
        <Route
          path='/ZeroCount'
          exact
          strict
          render={() => {
            return <ZeroCount data={zeroCountData} />;
          }}
        />
        <Route
          path='/NoService'
          exact
          strict
          render={() => {
            return <NoService data={noServiceData} />;
          }}
        />
        <Route
          path='/Error'
          exact
          strict
          render={() => {
            return <Error data={errorData} />;
          }}
        />
        <Route
          path='/HelpLinkOverlay'
          exact
          strict
          render={() => {
            return <HelpLinkOverlay data={HelpLinkOverlayData} />;
          }}
        />
        <Route
          path='/RichTextBox'
          exact
          strict
          render={() => {
            return <RichTextBox data={RichTextBoxData} />;
          }}
        />
        <Route
          path='/CustomDateTimePicker'
          exact
          strict
          render={() => {
            return <CustomDateTimePicker data={CustomDateTimePickerData} />;
          }}
        />
        <Route
          path='/LinkTile'
          exact
          strict
          render={() => {
            return (
              <div>
                {LinkTileData.tileData.map((linktile) => {
                  return <LinkTile key={linktile.type} data={linktile} />;
                })}
              </div>
            );
          }}
        />
        <Route
          path='/SummaryServiceSite'
          exact
          strict
          render={() => {
            return <SummaryServiceSite data={summaryServiceSiteData} />;
          }}
        />
        <Route
          path='/ToasterMessage'
          exact
          strict
          render={() => {
            return <ToasterMessage data={toasterMessageData} />;
          }}
        />
        <Route
          path='/EscalationMatrix'
          exact
          strict
          render={() => {
            return <EscalationMatrix data={EscalationMatrixData} />;
          }}
        />
        <Route
          path='/EscalationTimeline'
          exact
          strict
          render={() => {
            return <EscalationTimeline data={EscalationTimeLineData} />;
          }}
        />
        <Route
          path='/DropDownFilter'
          exact
          strict
          render={() => {
            return <DropDownFilter data={DropDownFilterData} />;
          }}
        />
        <Route
          path='/IconWithTitle'
          exact
          strict
          render={() => {
            return <IconWithTitle data={IconWithTitleData} />;
          }}
        />
        <Route
          path='/LinkTileWithBusinessService'
          exact
          strict
          render={() => {
            return <LinkTileWithBusinessService data={LinkTileWithBusinessServiceData} />;
          }}
        />
        <Route
          path='/AttachmentsList'
          exact
          strict
          render={() => {
            return <AttachmentsList data={AttachmentsListData} />;
          }}
        />
        <Route
          path='/TestComponent'
          exact
          strict
          render={() => {
            return <TestComponent data={testComponentData} />;
          }}
        />
      </div>
    );
  }
}

export default Routes;
