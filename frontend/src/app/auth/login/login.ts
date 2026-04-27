import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private auth = inject(AuthService);

  errorMsg = '';
  loading = false;

  formularioLogin = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    if (this.formularioLogin.invalid) return;
    const { email, password } = this.formularioLogin.value;
    this.loading = true;
    this.errorMsg = '';
    this.auth.login(email!, password!).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        this.errorMsg = err?.error?.detail || 'Credenciales incorrectas';
        this.loading = false;
      }
    });
  }
}
