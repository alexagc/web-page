import { TestBed, async } from '@angular/core/testing';
import { WebRootComponent } from './web.root.component';

describe('WebRootComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WebRootComponent
      ],
    }).compileComponents();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(WebRootComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('THIS WORKS');
  }));

});
