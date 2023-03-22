import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
          // { path: 'skill', loadChildren: () => import('../skill-analyisis/skill-analysis.module').then(m => m.SkillAnalysisModule) },
          // { path: 'tester', loadChildren: () => import('../tester/tester.module').then(m => m.TesterModule) },
          { path: '', redirectTo: 'home' }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }


