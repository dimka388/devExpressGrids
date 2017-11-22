import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import DataSource from 'devextreme/data/data_source';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class DataService {
	itemsURL: string = 'http://59f734d6d85fbd0012ee2235.mockapi.io/sitelisting';

	getItems: any = () => {
		return new DataSource({
			load: (loadOptions: any) => {
				return this.http.get(this.itemsURL)
					.toPromise()
					.then(response => response.json());
			}
		});
	}

	constructor(private http: Http) {}
}
