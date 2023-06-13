import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CochesService } from 'src/app/shared/coches.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  coches! : any[];
  constructor (private CocheService : CochesService , private router : Router) {
    this.CocheService.getCoches().subscribe((data: any) => {
      this.coches = data;
      console.log(this.coches);

    });
  }

}
