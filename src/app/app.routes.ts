import {Routes} from '@angular/router';
import {CoursesComponent} from "./courses/courses.component";
import {CourseDetailsComponent} from "./course-details/course-details.component";
import {AddLessonComponent} from "./add-lesson/add-lesson.component";
import {AddCourseComponent} from "./add-course/add-course.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {AddResourceComponent} from "./add-resource/add-resource.component";

export const routes: Routes = [
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/lessons/:id', component: CourseDetailsComponent},
  {path: "courses/lessons/:id/add", component: AddLessonComponent},
  {path: "courses/add", component: AddCourseComponent},
  {path: "users/add", component: AddUserComponent},
  {path: "lessons/resources/:id/add", component: AddResourceComponent}];
