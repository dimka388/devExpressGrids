import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
	selector: 'data-grid',
	providers: [ DatePipe ],
	templateUrl: '../DataGrid/datagrid.component.html',
	styleUrls: ['../DataGrid/datagrid.component.scss']
})

export class DataGridComponent implements OnInit {
	@ViewChild(DxDataGridComponent) dxDataGrid: DxDataGridComponent;
	@Input() customOptions: any;

	options: any = {
		columnAutoWidth: true,
		selectionCheckboxes: 'always',
		editingMode: 'row',
		paging: 10,
		columns: [],
		format: {
			formatter: date => {
				if (typeof date.getDate === 'function') {
					return this.datePipe.transform(date, 'dd-MMM-yyyy');
				}
			}
		},
		onCellPrepared: e => {
			if (e.rowType === 'data' && e.column.command === 'edit') {
				let links = e.cellElement.getElementsByClassName('dx-link');
				for (let link of links) {
					link.innerHTML = '';
					if (link.classList.contains('dx-link-save')) {
						link.classList.add('dx-icon-save');
					}
					if (link.classList.contains('dx-link-cancel')) {
						link.classList.add('dx-icon-revert');
					}
					if (link.classList.contains('dx-link-edit')) {
						link.classList.add('dx-icon-edit');
					}
					if (link.classList.contains('dx-link-delete')) {
						link.classList.add('dx-icon-trash');
					}
				}
			}
		}
	};

	croppText(text, length) {
		return text.length > length ? text.slice(0, length) + '...' : text;
	}

	clearFilter = () => {
		this.dxDataGrid.instance.clearFilter();
	}

	setFilter = (filters) => {
		this.dxDataGrid.instance.filter(filters);
	}

	ngOnInit() {
		this.options = {...this.options, ...this.customOptions};
	}

	constructor(public datePipe: DatePipe) {}
}