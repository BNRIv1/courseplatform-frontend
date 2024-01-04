import {Component} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {StudentService} from "../services/student.service";
import {TeacherService} from "../services/teacher.service";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });

  constructor(private studentService: StudentService,
              private teacherService: TeacherService) {
  }

  submit() {
    const role = this.userForm.get("role").value

    const data = {
      firstName: this.userForm.get("firstName").value,
      lastName: this.userForm.get("lastName").value,
      username: this.userForm.get("username").value,
      password: this.userForm.get("password").value,
      email: this.userForm.get("email").value,
    }

    if (role === "student") {
      this.studentService.addStudent(data).subscribe()
    } else {
      this.teacherService.addTeacher(data).subscribe()
    }
  }
}
