import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Navbar } from '../shared/navbar/navbar';

@Component({
  selector: 'app-landing',
  imports: [RouterLink, RouterModule, Navbar],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {}
