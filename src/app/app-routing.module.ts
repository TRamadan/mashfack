import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthgaurdGuard } from './authgaurd.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./welcomepage/welcomepage.module').then(m => m.WelcomepagePageModule)
  // },

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'tab1',
  //   loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  // },

  {
    path: 'specialty',
    loadChildren: () => import('./specialty/specialty.module').then(m => m.SpecialtyPageModule)
  },
  {
    path: 'city',
    loadChildren: () => import('./city/city.module').then(m => m.CityPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then(m => m.LocationPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then(m => m.ResultsPageModule)
  },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  // },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then(m => m.Tab5PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then(m => m.EditprofilePageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'sepcialitydetails',
    loadChildren: () => import('./sepcialitydetails/sepcialitydetails.module').then(m => m.SepcialitydetailsPageModule)
  },
  {
    path: 'pharmacydetails',
    loadChildren: () => import('./pharmacydetails/pharmacydetails.module').then(m => m.PharmacydetailsPageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'choosecity',
    loadChildren: () => import('./choosecity/choosecity.module').then(m => m.ChoosecityPageModule)
  },
  {
    path: 'doctordetails',
    loadChildren: () => import('./doctordetails/doctordetails.module').then(m => m.DoctordetailsPageModule)
  },
  {
    path: 'doctors',
    loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsPageModule)
  },
  {
    path: 'welcomepage',
    loadChildren: () => import('./welcomepage/welcomepage.module').then(m => m.WelcomepagePageModule),
  },
  {
    path: 'radiodetails',
    loadChildren: () => import('./radiodetails/radiodetails.module').then(m => m.RadiodetailsPageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'nursingdetails',
    loadChildren: () => import('./nursingdetails/nursingdetails.module').then(m => m.NursingdetailsPageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'homeanalysisdetails',
    loadChildren: () => import('./homeanalysisdetails/homeanalysisdetails.module').then(m => m.HomeanalysisdetailsPageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'forgotdetails',
    loadChildren: () => import('./forgotdetails/forgotdetails.module').then(m => m.ForgotdetailsPageModule),
  },
  {
    path: 'finalpage',
    loadChildren: () => import('./finalpage/finalpage.module').then(m => m.FinalpagePageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then(m => m.ChangepasswordPageModule),
    canActivate: [AuthgaurdGuard]
  },

  {
    path: 'revealtypes',
    loadChildren: () => import('./revealtypes/revealtypes.module').then(m => m.RevealtypesPageModule)
  },
  {
    path: 'hospitalsandclinics',
    loadChildren: () => import('./hospitalsandclinics/hospitalsandclinics.module').then(m => m.HospitalsandclinicsPageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'hospitals',
    loadChildren: () => import('./hospitals/hospitals.module').then(m => m.HospitalsPageModule)
  },
  {
    path: 'clinics',
    loadChildren: () => import('./clinics/clinics.module').then(m => m.ClinicsPageModule)
  },
  {
    path: 'labs',
    loadChildren: () => import('./labs/labs.module').then(m => m.LabsPageModule)
  },
  {
    path: 'clinicsunderhost',
    loadChildren: () => import('./clinicsunderhost/clinicsunderhost.module').then(m => m.ClinicsunderhostPageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'clinicsunderhostdrs',
    loadChildren: () => import('./clinicsunderhostdrs/clinicsunderhostdrs.module').then(m => m.ClinicsunderhostdrsPageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'clinicdetails',
    loadChildren: () => import('./clinicdetails/clinicdetails.module').then(m => m.ClinicdetailsPageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'homevisiting',
    loadChildren: () => import('./homevisiting/homevisiting.module').then(m => m.HomevisitingPageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'labsdepartments',
    loadChildren: () => import('./labsdepartments/labsdepartments.module').then(m => m.LabsdepartmentsPageModule)
  },
  {
    path: 'labsdeprsdrdetails',
    loadChildren: () => import('./labsdeprsdrdetails/labsdeprsdrdetails.module').then(m => m.LabsdeprsdrdetailsPageModule)
  },
  {
    path: 'laboratories',
    loadChildren: () => import('./laboratories/laboratories.module').then(m => m.LaboratoriesPageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'xrays',
    loadChildren: () => import('./xrays/xrays.module').then(m => m.XraysPageModule),
    canActivate: [AuthgaurdGuard]
  },
  {
    path: 'evaluation',
    loadChildren: () => import('./evaluation/evaluation.module').then( m => m.EvaluationPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
