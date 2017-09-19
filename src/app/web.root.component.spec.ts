import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WebRootComponent } from './web.root.component';
import { WebMenuListModule } from './shared/web-menu-list/web-menu-list.module';

describe('WebRootComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WebRootComponent
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        WebMenuListModule
      ]
    }).compileComponents();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(WebRootComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('ROUTER');
  }));

});
