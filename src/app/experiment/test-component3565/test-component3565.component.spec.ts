import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3565Component } from './test-component3565.component';

describe('TestComponent3565Component', () => {
  let component: TestComponent3565Component;
  let fixture: ComponentFixture<TestComponent3565Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3565Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
