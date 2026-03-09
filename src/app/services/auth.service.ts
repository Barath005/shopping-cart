import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private sessionIdKey = 'sessionId';

  constructor() {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.sessionIdKey);
  }

  getSessionId(): string | null {
    return localStorage.getItem(this.sessionIdKey);
  }

  login(): void {
    const sessionId = `session-${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(this.sessionIdKey, sessionId);
  }

  logout(): void {
    localStorage.removeItem(this.sessionIdKey);
  }
}