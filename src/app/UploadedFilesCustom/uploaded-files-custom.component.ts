import { Component } from '@angular/core';
import { DataService } from './uploaded-files-custom.service';

@Component({
	selector: 'uploaded-files-custom',
	providers: [ DataService ],
	templateUrl: '../UploadedFilesCustom/uploaded-files-custom.component.html'
})

export class UploadedFilesCustomComponent {
	dataGridOptions: any = {
		selectionMode: 'multiple',
		columns: [
			{
				dataField:'FileName',
				allowEditing: false
			},
			{
				dataField:'SponsorPreferredName',
				cellTemplate: 'compare'
			},
			{
				dataField:'SitePreferredName',
				cellTemplate: 'compare'
			}
		]
	};

	constructor(public service: DataService) {
		this.dataGridOptions.dataSource = service.getItems();
	}
}
