import { Component, OnInit } from '@angular/core';
import { User, UsersService } from './service/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  form: FormGroup;
  formSubmitted: boolean = false;
  mensajes: any[] = [];
  data: any;
  users: { name: string, email: string }[] = [];
  newUser: User = {
    name: '', email: '', password: '',
    id: 0
  };

  constructor(private fb: FormBuilder, private userService: UsersService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.data = response;
        this.form.patchValue({
          name: this.data.name,
          email: this.data.email,
          password: this.data.password
        });
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  addUser() {
    this.userService.createUser(this.newUser).subscribe(
      (user: User) => {
        this.users.push({
          name: user.name,
          email: user.email
        });
      },
      (err: any) => console.error(err)
    );

    this.formSubmitted = true;
    if (this.form.valid) {
      console.log('Formulario enviado correctamente');
      console.log('Datos del formulario:', this.form.value);
      this.data = this.form.value; // Actualizar data con los valores del formulario
      this.mensajes = [{
        severity: 'info',
        summary: 'Éxito',
        detail: `Datos guardados correctamente. Nombre: ${this.form.value.name}, Email: ${this.form.value.email}`
      }];
      this.mensajes = [{ severity: 'success', summary: 'Éxito', detail: 'Datos guardados correctamente.' }];
      this.form.reset();
      this.formSubmitted = false;
    } else {
      console.log('Por favor, completa todos los campos correctamente');
      this.mensajes = [{ severity: 'error', summary: 'Error', detail: 'Por favor, completa todos los campos correctamente.' }];
    }
  }
}
