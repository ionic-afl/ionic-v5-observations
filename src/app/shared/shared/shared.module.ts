import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ToggleIssueComponent } from '../toggle-issue/toggle-issue.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { DateComponent } from '../date/date.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SelectComponent } from '../select/select.component';
import { HtmlSelectComponent } from '../html-select/html-select.component';
@NgModule({
  declarations: [ToggleIssueComponent, RadioButtonComponent, DateComponent, CheckboxComponent, SelectComponent, HtmlSelectComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ToggleIssueComponent, RadioButtonComponent, DateComponent, CheckboxComponent, SelectComponent, HtmlSelectComponent]
})
export class SharedModule { }
