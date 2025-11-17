import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { OverlappedElementPage } from './OverlappedElementPage';
import { AjaxDataPage } from './AjaxDataPage';
import { VisibilityPage } from './VisibilityPage';
import { DynamicTablePage } from './DynamicTable';
import { SampleAppPage } from './SampleAppPage';
import { TextInputPage } from './TextInputPage';
import { ProgressBarPage } from './ProgressBarPage';
import { ClassAttributePage } from './ClassAttributePage';
import { HiddenLayersPage } from './HiddenLayersPage';
import { LoadDelayPage } from './LoadDelayPage';
import { ClientSideDelay } from './ClientSideDelayPage';
import { ClickPage } from './ClickPage';
import { ScrollbarsPage } from './ScrollbarsPage';
import { VerifyTextPage } from './VerifyTextPage';
import { MouseOverPage } from './MouseOverPage';
import { ShadowDomPage } from './ShadowDom';
import { AlertsPage } from './AlertsPage';
import { FileUploadPage } from './FileUploadPage';
import { AnimatedButtonPage } from './AnimatedButtonPage';
import { DisabledInputPage } from './DisabledInputPage';

/**
 * PageManager class acts as a central entry point for all Page Objects.
 * Instead of creating page objects directly in tests,
 * tests interact with them via PageManager.
 */
export class PageManager {
  private readonly page: Page;

  // Instances of Page Objects
  private readonly homePage: HomePage;
  private readonly overlappedElementPage: OverlappedElementPage;
  private readonly ajaxDataPage: AjaxDataPage;
  private readonly visibilityPage: VisibilityPage;
  private readonly dynamicTablePage: DynamicTablePage;
  private readonly sampleAppPage: SampleAppPage;
  private readonly textInputPage: TextInputPage;
  private readonly progressBarPage: ProgressBarPage;
  private readonly classAttributePage: ClassAttributePage;
  private readonly hiddenLayersPage: HiddenLayersPage;
  private readonly loadDelayPage: LoadDelayPage;
  private readonly clientSideDelayPage: ClientSideDelay;
  private readonly clickPage: ClickPage;
  private readonly scrollbarsPage: ScrollbarsPage;
  private readonly verifyTextPage: VerifyTextPage;
  private readonly mouseOverPage: MouseOverPage;
  private readonly shadowDomPage: ShadowDomPage;
  private readonly alertsPage: AlertsPage;
  private readonly fileUploadPage: FileUploadPage;
  private readonly animatedButtonPage: AnimatedButtonPage;
  private readonly disabledInputPage: DisabledInputPage;

  constructor(page: Page) {
    this.page = page;

    // Initialize all Page Objects with the same Playwright Page instance
    this.homePage = new HomePage(this.page);
    this.overlappedElementPage = new OverlappedElementPage(this.page);
    this.ajaxDataPage = new AjaxDataPage(this.page);
    this.visibilityPage = new VisibilityPage(this.page);
    this.dynamicTablePage = new DynamicTablePage(this.page);
    this.sampleAppPage = new SampleAppPage(this.page);
    this.textInputPage = new TextInputPage(this.page);
    this.progressBarPage = new ProgressBarPage(this.page);
    this.classAttributePage = new ClassAttributePage(this.page);
    this.hiddenLayersPage = new HiddenLayersPage(this.page);
    this.loadDelayPage = new LoadDelayPage(this.page);
    this.clientSideDelayPage = new ClientSideDelay(this.page);
    this.clickPage = new ClickPage(this.page);
    this.scrollbarsPage = new ScrollbarsPage(this.page);
    this.verifyTextPage = new VerifyTextPage(this.page);
    this.mouseOverPage = new MouseOverPage(this.page);
    this.shadowDomPage = new ShadowDomPage(this.page);
    this.alertsPage = new AlertsPage(this.page);
    this.fileUploadPage = new FileUploadPage(this.page);
    this.animatedButtonPage = new AnimatedButtonPage(this.page);
    this.disabledInputPage = new DisabledInputPage(this.page);
  }

  /**
   * Accessor for the HomePage object
   */
  onHomePage(): HomePage {
    return this.homePage;
  }

  /**
   * Accessor for the OverlappedElementPage object
   */
  onOverlappedElementPage(): OverlappedElementPage {
    return this.overlappedElementPage;
  }

  /**
   * Accessor for the AjaxDataPage object
   */
  onAjaxDataPage(): AjaxDataPage {
    return this.ajaxDataPage;
  }

  /**
   * Accessor for the VisibilityPage object
   */
  onVisibilityPage(): VisibilityPage {
    return this.visibilityPage;
  }

  /**
   * Accessor for the DynamicTablePage object
   */
  onDynamicTablePage(): DynamicTablePage {
    return this.dynamicTablePage;
  }

  /**
   * Accessor for the SampleAppPage object
   */
  onSampleAppPage(): SampleAppPage {
    return this.sampleAppPage;
  }

  /**
   * Accessor for the TextInputPage object
   */
  onTextInputPage(): TextInputPage {
    return this.textInputPage;
  }

  /**
   * Accessor for the ProgressBarPage object
   */
  onProgressBarPage(): ProgressBarPage {
    return this.progressBarPage;
  }

  /**
   * Accessor for the ClassAttributePage object
   */
  onClassAttributePage(): ClassAttributePage {
    return this.classAttributePage;
  }

  /**
   * Accessor for the HiddenLayersPage object
   */
  onHiddenLayersPage(): HiddenLayersPage {
    return this.hiddenLayersPage;
  }

  /**
   * Accessor for the LoadDelay object
   */
  onLoadDelayPage(): LoadDelayPage {
    return this.loadDelayPage;
  }

  /**
   * Accessor for the ClientSideDelay object
   */
  onClientSideDelayPage(): ClientSideDelay {
    return this.clientSideDelayPage;
  }

  /**
   * Accessor for the ClickPage object
   */
  onClickPage(): ClickPage {
    return this.clickPage;
  }

  /**
   * Accessor for the Scrollbars object
   */
  onScrollbarsPage(): ScrollbarsPage {
    return this.scrollbarsPage;
  }

  /**
   * Accessor for the Verify Text object
   */
  onVerifyTextPage(): VerifyTextPage {
    return this.verifyTextPage;
  }

  /**
   * Accessor for the Mouse Over object
   */
  onMouseOverPage(): MouseOverPage {
    return this.mouseOverPage;
  }

  /**
   * Accessor for the Non-Breaking Space object
   */
  onShadowDomPage(): ShadowDomPage {
    return this.shadowDomPage;
  }

  /**
   * Accessor for the Non-Breaking Space object
   */
  onAlertsPage(): AlertsPage {
    return this.alertsPage;
  }

  /**
   * Accessor for the File Upload object
   */
  onFileUploadPage(): FileUploadPage {
    return this.fileUploadPage;
  }

  /**
   * Accessor for the Animated Buton object
   */
  onAnimatedButtonPage(): AnimatedButtonPage {
    return this.animatedButtonPage;
  }

  /**
   * Accessor for the Disable Input object
   */
  onDisabledInputPage(): DisabledInputPage {
    return this.disabledInputPage;
  }
}
