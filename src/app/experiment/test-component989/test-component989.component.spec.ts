import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent989Component } from './test-component989.component';

describe('TestComponent989Component', () => {
  let component: TestComponent989Component;
  let fixture: ComponentFixture<TestComponent989Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent989Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
