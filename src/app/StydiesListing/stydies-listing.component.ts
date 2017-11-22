import { Component, ViewChild } from '@angular/core';
import { DataService } from './stydies-listing.service';
import { DataGridComponent } from '../DataGrid/datagrid.component';

@Component({
	selector: 'stydies-listing',
	providers: [ DataService ],
	templateUrl: '../StydiesListing/stydies-listing.component.html'
})

export class StydiesListingComponent {
	@ViewChild(DataGridComponent) dataGrid: DataGridComponent;
	private statusButtons: any = [];
	private statuses: string[] = ['Submitted', 'Approved', 'Closed'];
	private customStatus: string = 'Other';
	private getStatusClass: any = (value) => {
		return this.statuses.indexOf(value) > -1 ? value : this.customStatus;
	};
	private dataGridOptions: any = {
		filters: true,
		headerFilters: true,
		columns: [
			{
				dataField: 'StudyIRBID',
				caption: 'Study IRB ID'
			},
			{
				dataField: 'SponsorID',
				cellTemplate: 'link'
			},
			{
				dataField: 'StudyName',
				cellTemplate: 'link'
			},
			{
				dataField: 'NumberOfSites',
				dataType: 'number',
				caption: 'Number of Sites',
				allowFiltering: false,
				width: 90,
				alignment: 'center'
			},
			{
				dataField: 'Status',
				cellTemplate: (cellElement, cellInfo) => {
					cellElement.innerHTML = cellInfo.value;
					cellElement.classList.add(`status-${this.getStatusClass(cellInfo.value).toLowerCase()}`);
				}
			},
			{
				dataField: 'DateOfInitialApproval',
				dataType: 'date',
				filterOperations: [],
				caption: 'Date of Initial Approval'
			},
			{
				dataField: 'DateOfLastReview',
				dataType: 'date',
				filterOperations: [],
				caption: 'Date of Last Review'
			},
			{
				dataField: 'AvailableSubmissions',
				dataType: 'number',
				cellTemplate: 'link',
				caption: 'Available submissions',
				allowFiltering: false,
				width: 90,
				alignment: 'center'
			}
		]
	};
	private buttonClickHandler(button) {
		if (button.label === this.customStatus) {
			this.dataGrid.dxDataGrid.instance.filter((data) => this.statuses.indexOf(data.Status) < 0);
		} else {
			this.dataGrid.setFilter(["Status", "=", button.label]);
		}
	}
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
