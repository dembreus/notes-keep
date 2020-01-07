import { Component, Output, Input, EventEmitter } from "@angular/core";
import { INote } from "./../interfaces/note";

@Component({
  selector: "new-note",
  templateUrl: "./new-note.component.html",
  styleUrls: ["./new-note.component.scss"]
})
export class NewNoteComponent {
  @Input("title") public title: string;
  @Input("body") public body: string;
  @Output("saved") public saved = new EventEmitter<INote>();

  public save(): void {
    const note: INote = {
      id: Math.round(Math.random() * Date.now()),
      title: this.title,
      body: this.body
    };

    this.saved.emit(note);

    this.title = "";
    this.body = "";
  }
}
