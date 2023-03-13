import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Storage} from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'logovernightsleep',
    loadChildren: () => import('./logovernightsleep/logovernightsleep.module').then( m => m.LogovernightsleepPageModule)
  },
  {
    path: 'logsleepiness',
    loadChildren: () => import('./logsleepiness/logsleepiness.module').then( m => m.LogsleepinessPageModule)
  },

  {
    path: 'viewlogdata',
    loadChildren: () => import('./viewlogdata/viewlogdata.module').then( m => m.ViewlogdataPageModule)
  },
];

@NgModule({
  imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
