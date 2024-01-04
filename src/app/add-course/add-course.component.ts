import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CategoryService} from "../services/category.service";
import {Observable} from "rxjs";
import {Category} from "../interfaces/Category";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Teacher} from "../interfaces/Teacher";
import {TeacherService} from "../services/teacher.service";
import {CourseRequest} from "../interfaces/CourseRequest";
import {CourseService} from "../services/course.service";

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    ReactiveFormsModule
  ],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit{

  categories$: Observable<Category[]>
  teachers$: Observable<Teacher[]>

  courseForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required]),
    teacherId: new FormControl('', [Validators.required]),
    dateCreated: new FormControl('', [Validators.required]),
  });

  constructor(private categoryService: CategoryService,
              private teacherService: TeacherService,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories()
    this.teachers$ = this.teacherService.getTeachers()
  }

  submit(){
    console.log(this.courseForm.getRawValue())
    const course: CourseRequest = {
      title: this.courseForm.get("title").value,
      description: this.courseForm.get("description").value,
      dateCreated: this.courseForm.get("dateCreated").value,
      categoryId: +this.courseForm.get("categoryId").value,
      teacherId: +this.courseForm.get("teacherId").value
    }

    this.courseService.addCourse(course).subscribe();
  }
}
