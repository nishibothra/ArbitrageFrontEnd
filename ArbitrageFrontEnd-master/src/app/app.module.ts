import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { CcCalculatorComponent } from './component/cc-calculator/cc-calculator.component';
import { CcRandomComponent } from './component/cc-random/cc-random.component';
import { FraCalculatorComponent } from './component/fra-calculator/fra-calculator.component';
import { FraRandomComponent } from './component/fra-random/fra-random.component';
import { FxCalculatorComponent } from './component/fx-calculator/fx-calculator.component';
import { FxRandomComponent } from './component/fx-random/fx-random.component';
import { HistoryComponent } from './component/history/history.component';
import { HttpClientModule } from '@angular/common/http';
import { ForexService } from './service/forex.service';
import { FormsModule } from '@angular/forms';
import { FraService } from './service/fra.service';
import { CommonModule } from '@angular/common';
import { CashAndCarryService } from './service/cash-and-carry.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CcRandomComponent,
    CcCalculatorComponent,
    FxRandomComponent,
    FxCalculatorComponent,
    FraRandomComponent,
    FraCalculatorComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [ForexService,FraService,CashAndCarryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
