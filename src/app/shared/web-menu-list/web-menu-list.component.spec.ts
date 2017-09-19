import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WebMenuListComponent } from './web-menu-list.component';

describe('WebMenuListComponent', () => {
  let component: WebMenuListComponent;
  let fixture: ComponentFixture<WebMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WebMenuListComponent],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
