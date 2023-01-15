import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public username: string;
  public showMenu: boolean = false;

  public constructor(private authService: AuthService, private router: Router) {
    this.username = this.authService.auth.user!.username;
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/landing']);
  }

  public toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
