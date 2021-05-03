import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent502Component } from './test-component502.component';

describe('TestComponent502Component', () => {
  let component: TestComponent502Component;
  let fixture: ComponentFixture<TestComponent502Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent502Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
