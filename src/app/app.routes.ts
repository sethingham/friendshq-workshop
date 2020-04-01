import { Routes } from "@angular/router";

import {
  PeopleComponent
} from "src/app/people/people.component"

import {
  DashboardComponent,
} from "src/app/dashboard/dashboard.component";
import { PersonFormComponent } from './people/person-form/person-form.component';
import { PersonListComponent } from './people/person-list/person-list.component';

export const routes: Routes = [
  {
    path: 'people',
    children: [
      {
        path: '',
        component: PersonListComponent
      },
      {
        path: 'add',
        component: PersonFormComponent
      },
      {
        path: '**',
        redirectTo: ''

      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
