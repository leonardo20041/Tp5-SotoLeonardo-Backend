import { Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TransaccionFormComponent } from './components/transaccion-form/transaccion-form.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

export const routes: Routes = [
    {
        path: 'producto',
        component: ProductoComponent,
    },
    {
        path: 'producto-form',
        component: ProductoFormComponent,
    },
    {
        path: 'producto-form/:id',
        component: ProductoFormComponent,
    },

    {
        path: 'transaccion',
        component: TransaccionComponent,
    },
    {
        path: 'transaccion-form',
        component: TransaccionFormComponent,
    },
    {
        path: 'transaccion-form/:id',
        component: TransaccionFormComponent,
    },
    {
        path: 'transaccion/:monedaOrigen/:monedaDestino',
        component: TransaccionComponent,
    },
    
    {
        path: 'ticket',
        component: TicketComponent,
    },
    {
        path: 'ticket-form',
        component: TicketFormComponent,
    },
    {
        path: 'ticket-form/:id',
        component: TicketFormComponent,
    },

];
