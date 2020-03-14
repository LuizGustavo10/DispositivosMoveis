import {Routes, RoutesModule} from "@angular/router";

const routes: Routes = [
{path:"nome", component: NomeComponent}
];

@NgModule({
  imports: [RoutesModule.forRoot(routes)],
  exports: [RouterModule]
  })
