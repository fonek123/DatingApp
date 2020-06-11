import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from './member-card.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    Router,
    RouterModule,
    RouterOutlet,
    TabsModule.forRoot()
  ],
  declarations: [MemberCardComponent]
})
export class MemberCardModule { }
