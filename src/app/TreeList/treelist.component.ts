import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'tree-list',
	providers: [DatePipe],
	templateUrl: '../TreeList/treelist.component.html',
	styleUrls: ['../TreeList/treelist.component.scss']
})

export class TreeListComponent implements OnInit {
	@Input() customOptions: any;

	options: any = {
		format: {
			formatter: (date) => {
				if (typeof date.getDate === 'function') {
					return this.datePipe.transform(date, 'dd-MMM-yyyy');
				}
			}
		},
		itemsExpr: 'InnerItems',
		dataStructure: 'tree',
		selectionMode: 'none',
		selectionCheckboxes: 'always',
		columns: []
	}

	ngOnInit() {
		this.options = {...this.options, ...this.customOptions};
	}

	constructor(private datePipe: DatePipe) {}
}