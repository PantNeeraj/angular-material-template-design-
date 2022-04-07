import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './accordion/accordion.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { ReactiveForm3Component } from './reactive-form3/reactive-form3.component';
import { ReactiveForm4Component } from './reactive-form4/reactive-form4.component';
import { ReactiveForm5Component } from './reactive-form5/reactive-form5.component';
import {MatTableModule} from '@angular/material/table';
import { ReactiveForm6Component } from './reactive-form6/reactive-form6.component';
import { ReactiveForm7Component } from './reactive-form7/reactive-form7.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AccordionComponent,
    ReactiveFormComponent,
    ReactiveForm2Component,
    ReactiveForm3Component,
    ReactiveForm4Component,
    ReactiveForm5Component,
    ReactiveForm6Component,
    ReactiveForm7Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,FormsModule,ReactiveFormsModule,MatNativeDateModule,MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
