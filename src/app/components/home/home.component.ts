import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { CochesService } from 'src/app/shared/coches.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  coches! : any[];
  isSignedIn!: boolean;
  constructor (private CocheService : CochesService , private router : Router, private auth: AuthStateService) {
    this.CocheService.getCoches().subscribe((data: any) => {
      this.coches = data;
      console.log(this.coches);

    });
  }

  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }

}
