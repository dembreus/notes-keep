import { Component, Input } from "@angular/core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.scss"]
})
export class LikeComponent {
  @Input("likesCount") likesCount: number = 0;
  @Input("isActive") isActive: boolean;

  faHeart = faHeart;

  public like = () => {
    this.likesCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
    
  };
}
