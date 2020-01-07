import { Component, Input, Output, EventEmitter } from "@angular/core";
import { INote } from "./../interfaces/note";

@Component({
  selector: "note-item",
  templateUrl: "./note-item.component.html",
  styleUrls: ["./note-item.component.scss"]
})
export class NoteItemComponent {
  @Input("id") public id: number;
  @Input("title") public title: string;
  @Input("body") public body: string;
  @Output("deleted") public deleted = new EventEmitter<number>();

  private _note: INote = {
    id: this.id,
    title: this.title,
    body: this.body
  };

  public delete(id: number) {
    console.log("removing :", id);
    this.deleted.emit(id);
  }
}
