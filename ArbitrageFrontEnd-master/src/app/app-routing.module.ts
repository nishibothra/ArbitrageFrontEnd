import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CcCalculatorComponent } from './component/cc-calculator/cc-calculator.component';
import { CcRandomComponent } from './component/cc-random/cc-random.component';
import { FraCalculatorComponent } from './component/fra-calculator/fra-calculator.component';
import { FraRandomComponent } from './component/fra-random/fra-random.component';
import { FxCalculatorComponent } from './component/fx-calculator/fx-calculator.component';
import { FxRandomComponent } from './component/fx-random/fx-random.component';
import { HistoryComponent } from './component/history/history.component';
import { HomeComponent } from './component/home/home.component';

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
    path:'history',component:HistoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
