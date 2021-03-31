// The HTTP client service offers the following major features.

//     The ability to request typed response objects.
//     Streamlined error handling.
//     Testability features.
//     Request and response interception

// post-process the data, add error handling, and add retry logic, fetch, post


// The HttpClient service makes use of observables for all transactions. 
// The get() method takes two arguments;  the endpoint URL and options
// options object to configure - headers, params
// // eg
// options: {
//   headers?: HttpHeaders | {[header: string]: string | string[]},
//   observe?: 'body' | 'events' | 'response',
//   params?: HttpParams|{[param: string]: string | string[]},
//   reportProgress?: boolean,
//   responseType?: 'arraybuffer'|'blob'|'json'|'text',
//   withCredentials?: boolean,
// }
// The return type varies based on the observe and responseType values that you pass to the call.
// Important options include the observe and responseType properties.
//     The observe option specifies how much of the response to return.
//     The responseType option specifies the format in which to return data.


// The same service that performs your server transactions should also 
// perform error inspection, interpretation, and resolution.

// Handling request errors
// If the request fails on the server, HttpClient returns an error object instead of a successful response.
// The same service that performs your server transactions should also perform error inspection, interpretation, and resolution.
// When an error occurs, you can obtain details of what failed in order to inform your user. In some cases, you might also automatically retry the request.

// Two types of errors can occur.
//     The server backend might reject the request, returning an HTTP response with a status
        //  code such as 404 or 500. These are error responses.
//Something could go wrong on the client-side such as a network error that prevents
      // the request from completing successfully or an exception thrown in an RxJS operator. 
      // These errors produce JavaScript ErrorEvent objects.




// Retrying a failed request
// Sometimes the error is transient and goes away automatically if you try again. 
// For example, network interruptions 
// are common in mobile scenarios, and trying again can produce a successful result.

// Setup
// app/app.module.ts (excerpt)      
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpResponse } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    // AppComponent,
  ],
  bootstrap: [ 
    //   AppComponent 
    ]
})
export class AppModule {}


// You can then inject the HttpClient service as a dependency of an application class, 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}


@Injectable()
export class ConfigService {
    public data: any;
    constructor(private http: HttpClient) { }

    configUrl = 'assets/config.json';

    getConfig() {
      return this.http.get(this.configUrl);
    }
 

    // The subscription callback performs minimal post-processing
    showConfig() {
      this.getConfig()
        .subscribe((data) => this.data = {
            'heroesUrl': data,
            'textfile':  data,
            'date': data
        });
    }




}

// Requesting a typed response
export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}

@Injectable()
export class ConfigService2 {
    public data: any;
    constructor(private http: HttpClient) { }

    configUrl = 'assets/config.json';
    public config: Config;

    getConfig() {
      return this.http.get(this.configUrl);
    }
 

    // The subscription callback performs minimal post-processing
    showConfig() {
      this.getConfig()
        .subscribe((data) => this.data = {
            'heroesUrl': data,
            'textfile':  data,
            'date': data
        });
    }


    getConfig2() {
      // now returns an Observable of Config
      return this.http.get<Config>('assets/config.json');
    }

    // The callback in the updated component method receives a typed data object, which is easier and safer to consume:
    showConfig2() {
      this.getConfig2()
        // clone the data object, using its known Config shape
        .subscribe((data: Config) => this.config = { ...data });
    }

    showConfig3() {
      this.getConfig()
        .subscribe((data) => this.config = {
          heroesUrl: (data as any).heroesUrl,
          textfile:  (data as any).textfile,
        });
    }

    // Reading the full response
    getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' });
    }
    showConfigResponse() {
      this.getConfigResponse()
        // resp is of type `HttpResponse<Config>`
        .subscribe(resp => {
          // display its headers
          const keys = resp.headers.keys();
          this.headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
    
          // access the body directly, which is typed as `Config`.
          this.config = { ... resp.body };
        });
    }}


// Making a JSONP request
// Apps can use the HttpClient to make JSONP requests across domains when a server 
// doesn't support CORS protocol.

/* GET heroes whose name contains search term */
searchHeroes(term: string): Observable {
  term = term.trim();

  const heroesURL = `${this.heroesURL}?${term}`;
  return this.http.jsonp(heroesUrl, 'callback').pipe(
      catchError(this.handleError('searchHeroes', [])) // then handle the error
    );
}


// Requesting non-JSON data
getTextFile(filename: string) {
  // The Observable returned by get() is of type Observable<string>
  // because a text response was specified.
  // There's no need to pass a <string> type parameter to get().
  return this.http.get(filename, {responseType: 'text'})
    .pipe(
      tap( // Log the result or error
        data => this.log(filename, data),
        error => this.logError(filename, error)
      )
);


//               Getting error details
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}

getConfig() {
  return this.http.get<Config>(this.configUrl)
    .pipe(
      catchError(this.handleError)
    );
}




          // Retrying a failed request

getConfig() {
  return this.http.get<Config>(this.configUrl)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
}




      //Sending data to a server
      // Making a POST request
      // The method takes a resource URL and two additional parameters:
        // body - The data to POST in the body of the request.
        // options - An object containing method options which, in this case, specify required headers.
    

/** POST: add a new hero to the database */
addHero(hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
    .pipe(
      catchError(this.handleError('addHero', hero))
    );
}