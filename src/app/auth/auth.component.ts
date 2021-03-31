import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from './example.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public data: any;
  public contents: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  showUsers() {
    this.http.get('assets/config.json').subscribe(data => this.data = console.log(data));
  }

  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(filename, {responseType: 'text'})
      .pipe(
        tap( // Log the result or error
          data => console.log(filename, data),
          error => console.log(filename, error)
        )
      );

  }
  download() {
    this.getTextFile('assets/textfile.txt')
      .subscribe(results => this.contents = results);
  }
}