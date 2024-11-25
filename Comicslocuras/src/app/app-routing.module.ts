import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'cambiocontrase',
    loadChildren: () => import('./pages/cambiocontrase/cambiocontrase.module').then( m => m.CambiocontrasePageModule)
  },
  {
    path: 'carritocompras',
    loadChildren: () => import('./pages/carritocompras/carritocompras.module').then( m => m.CarritocomprasPageModule)
  },
  {
    path: 'comics',
    loadChildren: () => import('./pages/comics/comics.module').then( m => m.ComicsPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./pages/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./pages/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'funkopop',
    loadChildren: () => import('./pages/funkopop/funkopop.module').then( m => m.FunkopopPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mangas',
    loadChildren: () => import('./pages/mangas/mangas.module').then( m => m.MangasPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  
  {
    path: 'peluches',
    loadChildren: () => import('./pages/peluches/peluches.module').then( m => m.PeluchesPageModule)
  },
  {
    path: 'preguntas',
    loadChildren: () => import('./pages/preguntas/preguntas.module').then( m => m.PreguntasPageModule)
  },
  {
    path: 'recuperarcontrase',
    loadChildren: () => import('./pages/recuperarcontrase/recuperarcontrase.module').then( m => m.RecuperarcontrasePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registroventa',
    loadChildren: () => import('./pages/registroventa/registroventa.module').then( m => m.RegistroventaPageModule)
  },
  {
    path: 'verperfil',
    loadChildren: () => import('./pages/verperfil/verperfil.module').then( m => m.VerPerfilPageModule)
  },
  {
    path: 'accesorios',
    loadChildren: () => import('./pages/accesorios/accesorios.module').then( m => m.AccesoriosPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./pages/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'nueva',
    loadChildren: () => import('./pages/nueva/nueva.module').then( m => m.NuevaPageModule)
  },
  {
    path: 'apimarvel',
    loadChildren: () => import('./pages/apimarvel/apimarvel.module').then( m => m.ApimarvelPageModule)
  },
  {
    path: 'geolocalizacion',
    loadChildren: () => import('./pages/geolocalizacion/geolocalizacion.module').then( m => m.GeolocalizacionPageModule)
  },
  {
    path: 'detalleproducto',
    loadChildren: () => import('./pages/detalleproducto/detalleproducto.module').then( m => m.DetalleproductoPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  

  

  

  


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
