import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetTableComponent } from './budget/components/budget-table/budget-table.component';
import { BlogComponent } from './budget-blog/components/blog/blog.component';

const routes: Routes = [
  {path: '', component: BudgetTableComponent},
  {path: 'blog', component: BlogComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
