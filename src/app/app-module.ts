import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ChatBot } from './components/chat-bot/chat-bot';
import { Home } from './pages/home/home';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { RainBoots } from './components/rainboots/rainboots';
import { Product } from './pages/product/product';

@NgModule({
  declarations: [App, ChatBot, Home, Header, Footer, RainBoots, Product],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
