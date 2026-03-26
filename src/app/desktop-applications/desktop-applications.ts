import { Component } from '@angular/core';
import { faTachometerAlt, faZap, faChartBar } from '@fortawesome/free-solid-svg-icons';

interface Application {
  name: string;
  icon: any;
  url: string;
}

@Component({
  selector: 'app-desktop-applications',
  standalone: false,
  templateUrl: './desktop-applications.html',
  styleUrl: './desktop-applications.css',
})
export class DesktopApplications {
  applications: Application[] = [
    {
      name: 'EBMS',
      icon: faZap,
      url: 'https://bhanuprasad-mekala.github.io/EBMSFrontEnd/',
    },
    {
      name: 'Dashboard Demo',
      icon: faTachometerAlt,
      url: 'https://bhanuprasad-mekala.github.io/Dashboard/',
    },
    {
      name: 'Sales Report',
      icon: faChartBar,
      url: 'https://bhanuprasad-mekala.github.io/SalesReport',
    },
  ];

  openApplication(app: Application): void {
    window.open(app.url, '_blank');
  }
}
