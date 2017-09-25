import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  updating = false;

  ngOnInit() {}

  onSubmit() {
    this.updating = true;
    setTimeout(() => {
      this.updating = false;
    }, 10000);
  }
}
