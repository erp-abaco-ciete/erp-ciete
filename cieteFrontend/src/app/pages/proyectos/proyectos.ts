import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-proyectos',
  imports: [RouterModule, Navbar],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {}
