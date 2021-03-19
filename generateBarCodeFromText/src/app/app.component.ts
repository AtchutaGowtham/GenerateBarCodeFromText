import { Component } from '@angular/core';
import { NgxBarcodeModule } from 'ngx-barcode';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	fileContent: string = '';

	public onChange(fileList: FileList): void {
		let file = fileList[0];
		let fileReader: FileReader = new FileReader();
		var that = this;

		fileReader.onloadend = function(x) {
			that.fileContent = fileReader.result as string;
		};
		fileReader.readAsText(file);
	}
}
