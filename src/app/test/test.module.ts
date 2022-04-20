import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [TestComponent]
})
export class TestModule { }
