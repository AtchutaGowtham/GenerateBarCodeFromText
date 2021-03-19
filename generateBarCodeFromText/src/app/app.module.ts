import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxBarcodeModule } from 'ngx-barcode';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, NgxBarcodeModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
