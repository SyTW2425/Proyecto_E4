import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component'; // Importa tu componente

const routes: Routes = [
  // { path: '', component: HomeComponent }, // Componente de inicio
  { path: 'sign-in', component: SignInComponent }, // Componente de login
  // { path: 'contact', component: ContactComponent }, // Componente de contacto (si existe)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura las rutas
  exports: [RouterModule] // Exporta el módulo para ser utilizado en otros lugares
})
export class AppRoutingModule { }
