import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2565Component } from './test-component2565.component';

describe('TestComponent2565Component', () => {
  let component: TestComponent2565Component;
  let fixture: ComponentFixture<TestComponent2565Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2565Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
