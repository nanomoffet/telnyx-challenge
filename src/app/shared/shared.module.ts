import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    exports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ]
})

export class SharedModule {}
