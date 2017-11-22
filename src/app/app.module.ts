import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TreeListComponent } from './TreeList/treelist.component';
import { DataGridComponent } from './DataGrid/datagrid.component';
import { UploadedFilesComponent } from './UploadedFiles/uploaded-files.component';
import { UploadedFilesCustomComponent } from './UploadedFilesCustom/uploaded-files-custom.component';
import { SitesListingComponent } from './SitesListing/sites-listing.component';
import { StydiesListingComponent } from './StydiesListing/stydies-listing.component';
import { SubmissionListingComponent } from './SubmissionListing/submission-listing.component';
import { SubmissionDetailsComponent } from './SubmissionDetails/submission-details.component';

import { DevExtremeModule,
	DxDataGridComponent,
	DxDataGridModule,
	DxSelectBoxModule,
	DxCheckBoxModule,
	DxTreeListModule,
	DxButtonModule } from 'devextreme-angular';

@NgModule({
	providers: [],
	declarations: [
		AppComponent,
		DataGridComponent,
		TreeListComponent,
		UploadedFilesComponent,
		UploadedFilesCustomComponent,
		SitesListingComponent,
		StydiesListingComponent,
		SubmissionListingComponent,
		SubmissionDetailsComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		DxDataGridModule,
		DxSelectBoxModule,
		DxCheckBoxModule,
		DxTreeListModule,
		DxButtonModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
