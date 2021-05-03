import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1565Component } from './test-component1565.component';

describe('TestComponent1565Component', () => {
  let component: TestComponent1565Component;
  let fixture: ComponentFixture<TestComponent1565Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1565Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
