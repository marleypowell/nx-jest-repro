import { Component, Inject, InjectionToken, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import type { InterfaceFromInterfaceOnlyModule } from './deptest-interface';

const INJECTION_TOKEN = new InjectionToken('InjectionToken');

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'nx-jest-repro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(INJECTION_TOKEN) @Optional() public test: InterfaceFromInterfaceOnlyModule) {}
}
