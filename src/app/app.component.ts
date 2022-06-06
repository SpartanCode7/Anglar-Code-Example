import { Component } from '@angular/core';
import { AppdataService } from './appservices/services/appdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Realresearch';

  catNme: any;
  catId: any;
  _id1:any;

  constructor(private AppData: AppdataService) {
      this.AppData.getCates().subscribe( Response => {
        this.catNme = Response;
        this._id1 = Response;
        console.log(Response);
      })
  }

  ngOnInit(): void {
    return this.catNme;
  }

}
