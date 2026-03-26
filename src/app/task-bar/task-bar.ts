import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faSearch,
  faBatteryFull,
  faBatteryThreeQuarters,
  faBatteryHalf,
  faBatteryQuarter,
  faBolt
} from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft, faWindows } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-task-bar',
  standalone: false,
  templateUrl: './task-bar.html',
  styleUrl: './task-bar.css',
})
export class TaskBar {
  currentTime: string = '';
  currentDate: string = '';
  batteryLevel: number = 85;
  isCharging: boolean = false;
  batteryIcon: any = faBatteryHalf;
  appUrl = 'https://bhanuprasad-mekala.github.io/EBMSFrontEnd/';

  // FontAwesome icons
  faWindows = faMicrosoft;
  faSearch = faSearch;
  faBolt = faBolt;

  constructor(private library: FaIconLibrary) {
    this.library.addIcons(
      faMicrosoft,
      faSearch,
      faBatteryFull,
      faBatteryThreeQuarters,
      faBatteryHalf,
      faBatteryQuarter,
      faBolt
    );

    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
    this.initBatteryMonitoring();
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    this.currentDate = `${day}-${month}-${year}`;
  }

  async initBatteryMonitoring() {
    try {
      // @ts-ignore - Battery API might not be in types
      const battery = await navigator.getBattery();
      this.updateBatteryInfo(battery);

      battery.addEventListener('levelchange', () => this.updateBatteryInfo(battery));
      battery.addEventListener('chargingchange', () => this.updateBatteryInfo(battery));
    } catch (error) {
      console.log('Battery API not supported, using mock data');
      // Keep default values for demo
    }
  }

  updateBatteryInfo(battery: any) {
    this.batteryLevel = Math.round(battery.level * 100);
    this.isCharging = battery.charging;
    this.updateBatteryIcon();
  }

  updateBatteryIcon() {
    if (this.isCharging) {
      this.batteryIcon = faBatteryHalf; // Will be styled green
    } else if (this.batteryLevel >= 75) {
      this.batteryIcon = faBatteryFull;
    } else if (this.batteryLevel >= 50) {
      this.batteryIcon = faBatteryThreeQuarters;
    } else if (this.batteryLevel >= 25) {
      this.batteryIcon = faBatteryHalf;
    } else {
      this.batteryIcon = faBatteryQuarter;
    }
  }
}
