import { Component } from "@angular/core";
import { INote } from "./interfaces/note";

@Component({
  selector: "notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent {
  public notes: INote[] = [];
  public note: INote;

  public addNote(note: INote): void {
    if (note) this.notes.push(note);
  }
  public removeNote(id: number): void {
    if (id > 0) this.notes = this.notes.filter(n => n.id !== id);
  }
}
