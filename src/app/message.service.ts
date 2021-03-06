import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Message } from './lib/message';
import '../rxjs-extensions';

@Injectable()
export class MessageService {
  private origin = process.env.ORIGIN;
  private subject = new Subject<void>();

  public currentMessage: Observable<Message>;

  constructor(private http: Http) {
    this.currentMessage = this.subject
      .debounceTime(300)
      .switchMap(() => this.getRandomMessage())
      .catch(this.httpError);
  };

  private httpError(error: any): Observable<Message> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.of<Message>();
  }

  private getRandomMessage(): Observable<Message> {
    return this.http
      .get(`${this.origin}/random-message`)
      .map(res => res.json() as Message);
  }

  public next(): void {
    this.subject.next();
  };
}
