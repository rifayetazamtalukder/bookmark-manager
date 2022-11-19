import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Modules
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
// 
import { MatFormFieldModule } from "@angular/material/form-field";
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
// 
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
// 
import { MatMenuModule } from "@angular/material/menu";
// 
import { MatTableModule } from "@angular/material/table";
// 
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
// 
import { MatToolbarModule } from "@angular/material/toolbar";
// 
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

const MATERIAL_MODULES = [
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  TextFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatMenuModule,
  MatTableModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES
  ]
})
export class MaterialModule { }
