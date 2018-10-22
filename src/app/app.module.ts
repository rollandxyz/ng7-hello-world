import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { DragDropSortingComponent } from './components/drag-drop-sorting/drag-drop-sorting.component';
import { AppMaterialModule } from './app-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { FieldRowComponent } from './components/field-row/field-row.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { XlsxViewComponent } from './components/xlsx-view/xlsx-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropSortingComponent,
    FieldRowComponent,
    FileUploadComponent,
    XlsxViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
