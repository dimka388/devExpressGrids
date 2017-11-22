import { Component } from '@angular/core';
import { DataService } from './sites-listing.service';

@Component({
	selector: 'sites-listing',
	providers: [ DataService ],
	templateUrl: '../SitesListing/sites-listing.component.html'
})

export class SitesListingComponent {
	private dataGridOptions: any = {
		filters: true,
		columns: [
			{
				dataField:'SideID'
			},
			{
				dataField:'SiteName',
				cellTemplate: 'link'
			},
			{
				dataField:'StudyName',
				cellTemplate: 'link'
			},
			{
				dataField:'contacts',
				dataType: 'number',
				allowFiltering: false,
				caption: 'Number of Contacts',
				cellTemplate: 'link',
				alignment: 'center'
			}
		]
	};

	constructor(private service: DataService) {
		this.dataGridOptions.dataSource = service.getItems();
	}
}
