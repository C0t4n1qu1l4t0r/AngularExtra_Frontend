import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { ReservasService } from 'src/app/shared/reservas.service';
import { Reserva } from './reserva.model';
import { map } from 'rxjs';
import { CochesService } from 'src/app/shared/coches.service';

@Component({
  selector: 'app-create-reserva',
  templateUrl: './create-reserva.component.html',
  styleUrls: ['./create-reserva.component.css']
})
export class CreateReservaComponent {
  reserva : Reserva = new Reserva('','','','','');
  coche : any;
  coche_id : any;
  constructor(private route: ActivatedRoute, private reservaService: ReservasService, private authService: AuthService, private router :  Router, private cocheService: CochesService){

    this.route.params.subscribe(params => {
      this.reserva['coche_id'] = params['id'];
      this.coche_id =  params['id'];
    });

    this.getUserID().subscribe((userId: any) => {
        this.reserva['user_id'] = userId;
      });

    this.getCoche();
  }

  getCoche(){
    this.cocheService.getCoche(this.coche_id).subscribe((res) => {
      this.coche = res;
    });
  }

  getUserID(){
    return this.authService.profileUser().pipe(
      map((user:any) => user['id'])
    );
  }

reservar() {
  this.reservaService.reservar(this.reserva)
        .subscribe((res: any) => {
          this.reserva = res.data;
          alert('Reserva Creada correctamente para el usuario' + this.reserva['user_id'] + ' con el coche ' + this.reserva['coche_id'])
          this.router.navigate(['/home']);
        });
  }
}
