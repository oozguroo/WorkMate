import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxGalleryModule } from '@kolkov/ngx-gallery';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxGalleryModule,
  
  ],
  exports:[

    NgxGalleryModule,

  ]
})
export class SharedModule { }
