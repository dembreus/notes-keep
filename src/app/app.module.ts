import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { NotesComponent } from "./components/notes/notes.component";
import { NoteItemComponent } from "./components/notes/note-item/note-item.component";
import { NewNoteComponent } from "./components/notes/new-note/new-note.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LikeComponent } from "./components/util/like/like.component";

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteItemComponent,
    NewNoteComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
