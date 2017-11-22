import { Component } from '@angular/core';
import { DataService } from './uploaded-files.service';

@Component({
	selector: 'uploaded-files',
	providers: [ DataService ],
	templateUrl: '../UploadedFiles/uploaded-files.component.html'
})

export class UploadedFilesComponent {
	dataGridOptions: any = {
		selectionMode: 'multiple',
		allowUpdating: true,
		columns: [
			{
				dataField:'FileName',
				allowEditing: false
			},
			{
				dataField:'PreferredName',
				cellTemplate: 'compare'
			}
		]
	};

	constructor(service: DataService) {
		this.dataGridOptions.dataSource = service.getItems();
	}
}
