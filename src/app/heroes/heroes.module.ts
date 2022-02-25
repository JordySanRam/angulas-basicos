import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Exports significa que cosas quiero hacer
    // públicas de este módulo
    exports: [
        ListadoComponent
    ],
    // Usualmente solo módulos van en los imports
    imports:[
        // CommonModule nos ofrece  cosas como el 
        // ngfor, ngif y cosas mas avanzadas de angular
        CommonModule
    ]
})
export class HeroesModule{

}