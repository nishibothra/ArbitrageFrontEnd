import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CcHistoryComponent } from './cc-history/cc-history.component';
import { CcCalculatorComponent } from './component/cc-calculator/cc-calculator.component';
import { CcRandomComponent } from './component/cc-random/cc-random.component';
import { FraCalculatorComponent } from './component/fra-calculator/fra-calculator.component';
import { FraRandomComponent } from './component/fra-random/fra-random.component';
import { FxCalculatorComponent } from './component/fx-calculator/fx-calculator.component';
import { FxRandomComponent } from './component/fx-random/fx-random.component';
import { HomeComponent } from './component/home/home.component';
import { FraHistoryComponent } from './fra-history/fra-history.component';
import { FxHistoryComponent } from './fx-history/fx-history.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'cc', component:CcRandomComponent

  },
  {
    path:'fx', component:FxRandomComponent
  },
  {
    path:'fra', component:FraRandomComponent
  },
  {
    path:'cc', children:[
      {
        path:'random',component:CcRandomComponent
      },
      {
        path:'calculator',component:CcCalculatorComponent
      }
    ]
  },
  {
    path:'fx', children:[
      {
        path:'random',component:FxRandomComponent
      },
      {
        path:'calculator',component:FxCalculatorComponent
      }
    ]
  },
  {
    path:'fra', children:[
      {
        path:'random',component:FraRandomComponent
      },
      {
        path:'calculator',component:FraCalculatorComponent
      }
    ]
  },
  {
    path:'history', children:[
      {
        path:'cc',component:CcHistoryComponent
      },
      {
        path:'fx',component:FxHistoryComponent
      },
      {
        path:'fra',component:FraHistoryComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
