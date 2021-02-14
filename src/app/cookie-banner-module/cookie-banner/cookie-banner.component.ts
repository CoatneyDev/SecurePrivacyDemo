import {
  Component,
  AfterViewInit,
  ViewEncapsulation,
  ViewChild,
} from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

import {
  faCaretUp,
  faCaretDown,
  faTimes,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { CookieBannerService } from "src/app/services/cookie-banner.service";
import { AccordionPanel } from "src/app/models/accordion-panel";

@Component({
  selector: "sp-cookie-banner",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./cookie-banner.html",
  styleUrls: ["./cookie-banner.css"],
})
export class CookieBannerComponent implements AfterViewInit {
  isCollapsed = false;
  title = "Secure Privacy Demo";
  disabled = false;
  closeResult = "";
  faTimes = faTimes;
  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;
  panels: Array<AccordionPanel> = [];
  iconToggle: Array<IconDefinition> = [];

  @ViewChild("content", { static: false })
  private content!: NgbModal;

  constructor(
    private modalService: NgbModal,
    private bannerService: CookieBannerService
  ) {}

  ngAfterViewInit(): void {
    this.bannerService.getCookieBannerContent().subscribe((data) => {
      data.accordian.forEach((element: AccordionPanel) => {
        this.panels.push(element);
        this.iconToggle.push(faCaretDown);
      });
      this.iconToggle[0] = faCaretUp;
    });

    // Trigger change detection
    this.iconToggle = [...this.iconToggle];

    // Default modal position to open
    this.open(this.content);
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  onToggleAccordion(i: number): void {
    this.iconToggle[i] == faCaretUp
      ? (this.iconToggle[i] = faCaretDown)
      : (this.iconToggle[i] = faCaretUp);
  }

  getCollapseIcon(): IconDefinition {
    return this.isCollapsed ? faCaretDown : faCaretUp;
  }
}
