import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ResourceType} from "../interfaces/ResourceType";
import {ResourceTypeService} from "../services/resource-type.service";
import {AsyncPipe, NgForOf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ResourceService} from "../services/resource.service";

@Component({
  selector: 'app-add-resource',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './add-resource.component.html',
  styleUrl: './add-resource.component.css'
})
export class AddResourceComponent implements OnInit{
  resourceTypes$: Observable<ResourceType[]>

  resourceForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    resourcePath: new FormControl('', [Validators.required]),
    lessonId: new FormControl('', [Validators.required]),
    resourceTypeId: new FormControl('', [Validators.required])
  });

  constructor(private resourceTypeService: ResourceTypeService, private route: ActivatedRoute,
              private resourceService: ResourceService) {
  }

  ngOnInit(): void {
    this.resourceTypes$ = this.resourceTypeService.getResourceTypes()
  }

  submit(){
    const lessonId =  +this.route.snapshot.paramMap.get("id")
    const data = {
      title: this.resourceForm.get("title").value,
      resourcePath: this.resourceForm.get("resourcePath").value,
      lessonId: lessonId,
      resourceTypeId: +this.resourceForm.get("resourceTypeId").value
    }
    console.log(data.lessonId)
    this.resourceService.addResource(data).subscribe()
  }
}
