import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  successModalRef: BsModalRef;
  config: any = {
    backdrop: 'static',
    keyboard: false,
    class: 'theme-modal',
  };

  constructor(
    private modalService: BsModalService,
  ) { }

  openModal(
    success_template: TemplateRef<any>
  ) {
    this.successModalRef = this.modalService.show(
      success_template,
      this.config
    );
  }
}
