import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  currentUser: any;

  login(username: string, password: string): boolean {
    // Verificar las credenciales del usuario
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      this.isLoggedIn = true;
      this.currentUser = user;
      return true;
    }

    return false;
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
  }

  // Datos ficticios de usuarios
  users = [
    { id: 1, username: 'usuario1', password: 'contraseña1' },
    { id: 2, username: 'usuario2', password: 'contraseña2' },
    { id: 3, username: 'usuario3', password: 'contraseña3' }
  ];
}


