import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgxGalleryModule
  ],
  exports:[
    FormsModule,
    NgxGalleryModule
  ]
})
export class SharedModule { }
