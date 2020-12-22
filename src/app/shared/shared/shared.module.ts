import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ToggleIssueComponent } from '../toggle-issue/toggle-issue.component';
@NgModule({
  declarations: [ToggleIssueComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ToggleIssueComponent]
})
export class SharedModule { }
