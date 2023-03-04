import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';









@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxGalleryModule,
    FileUploadModule,
    BsDatepickerModule.forRoot()
    
  ],
  exports:[

    NgxGalleryModule,
    FileUploadModule,
    BsDatepickerModule
    
  ]
})
export class SharedModule { }
