import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students.component'; // ✅ Correct path based on your screenshot

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StudentsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
