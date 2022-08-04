import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private cleintId: string = '5284b94fbda6458996432c4a82c43d0a';
  private clientSecret: string = '87e3bee127194790b48dbe57d526c728';
  private artistUrl: string =
    'https://api.spotify/com/v1/search?&q=&type=track%2Cartist';

  constructor(private http: HttpClient) {}
  searchArtists(searchTerm: string) {
    let url =
      'https://api.spotify.com/v1/search?&q=' +
      searchTerm +
      '&type=track%2Cartist&limit=3';
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCfHm73w6C0H0gDXaiGLb9cEk4_44UdH0QTQO3I_1w9LhYSbdYUdln6smDrNxFxZr40Yjqr7Z6y9fDAwSIgk7N36N31NgylwICy15kmoZ76XokVpGrZBjLIQJmhdT8iefufg3kG_v0YPLfxTKYK9GnPX97JlgUwepympuXwbz7ae6enYL6GJVLP8X_qtjtJPR8',
    });
    return this.http.get(url, { headers }).pipe(map((res: any) => res));
  }

  searchTrack(searchTerm: string) {
    let url =
      'https://api.spotify.com/v1/search?&q=' +
      searchTerm +
      '&type=track&limit=5';
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCfHm73w6C0H0gDXaiGLb9cEk4_44UdH0QTQO3I_1w9LhYSbdYUdln6smDrNxFxZr40Yjqr7Z6y9fDAwSIgk7N36N31NgylwICy15kmoZ76XokVpGrZBjLIQJmhdT8iefufg3kG_v0YPLfxTKYK9GnPX97JlgUwepympuXwbz7ae6enYL6GJVLP8X_qtjtJPR8',
    });
    return this.http.get(url, { headers }).pipe(map((res: any) => res));
  }
}
