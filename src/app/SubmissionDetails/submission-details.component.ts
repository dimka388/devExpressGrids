import { Component } from '@angular/core';
import { DataService } from './submission-details.service';

@Component({
	selector: 'submission-details',
	providers: [ DataService ],
	templateUrl: '../SubmissionDetails/submission-details.component.html'
})

export class SubmissionDetailsComponent {
	private treeListOptions: any = {
		selectionMode: 'multiple',
		columns: [
			{
				dataField:'DocumentID'
			},
			{
				dataField:'FileName'
			},
			{
				dataField:'PreferredName',
				cellTemplate: 'compare'
			},
			{
				dataField:'Status'
			},
			{
				dataField:'SubmittedBy'
			},
			{
				dataField:'SubmittedDate',
				dataType: 'date',
				caption: 'Date Submitted'
			}
		]
	};

	constructor(private service: DataService) {
		this.treeListOptions.dataSource = service.getItems();
	}
}
