import { Component } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { SearchService } from './services/search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'spot-angular';
  artistinputField: FormControl = new FormControl();
  trackinputField: FormControl = new FormControl();
  artistResults: any[] = [];
  trackResults: any[] = [];
  constructor(private searchService: SearchService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.artistinputField.valueChanges.subscribe((artistinputField) =>
      this.searchService.searchArtists(artistinputField).subscribe((result) => {
        if (result.status == 400) {
          return;
        } else {
          this.artistResults = result.artists.items;
        }
      })
    );
    this.trackinputField.valueChanges.subscribe((trackinputField) =>
      this.searchService.searchTrack(trackinputField).subscribe((result) => {
        if (result.status == 400) {
          return;
        } else {
          this.trackResults = result.tracks.items;
        }
      })
    );
  }
  convertDuration(ms: number) {
    var minutes = Math.floor(ms / 60000);
    var seconds = Math.round((ms % 60000) / 1000);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
}
