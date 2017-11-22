import { Component, ViewChild } from '@angular/core';
import { DataService } from './submission-listing.service';
import { DataGridComponent } from '../DataGrid/datagrid.component';

@Component({
	selector: 'submission-listing',
	providers: [ DataService ],
	templateUrl: '../SubmissionListing/submission-listing.component.html'
})

export class SubmissionListingComponent {
	@ViewChild(DataGridComponent) dataGrid: DataGridComponent;
	private statusButtons: any = [];
	private dataGridOptions: any = {
		filters: true,
		headerFilters: true,
		columns: [
			{
				dataField: 'Submission',
				cellTemplate: 'link'
			},
			{
				dataField: 'Type'
			},
			{
				dataField: 'Status',
				cellTemplate: (cellElement, cellInfo) => {
					cellElement.innerHTML = cellInfo.value;
					cellElement.classList.add(`status-${cellInfo.value.toLowerCase()}`);
				}
			},
			{
				dataField: 'Study',
				cellTemplate: 'link'
			},
			{
				dataField: 'Site',
				cellTemplate: 'link'
			},
			{
				dataField: 'SubmittedBy'
			},
			{
				dataField: 'SubmittedDate',
				dataType: 'date',
				filterOperations: [],
				caption: 'Date Submitted'
			}
		]
	};
	private buttonClickHandler(button) {
		this.dataGrid.setFilter(["Status", "=", (button.filter || button.label)]);
	};
	private resetClickHandler() {
		this.dataGrid.clearFilter();
	}

	constructor(private service: DataService) {
		this.dataGridOptions.dataSource = service.getItems();
		service.getButtons().then(buttons => {
			this.statusButtons = buttons;
		});
	}
}
