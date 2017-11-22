import { TestBed, async } from '@angular/core/testing';
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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        HttpModule,
        DxDataGridModule,
        DxSelectBoxModule,
        DxCheckBoxModule,
        DxTreeListModule,
        DxButtonModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
