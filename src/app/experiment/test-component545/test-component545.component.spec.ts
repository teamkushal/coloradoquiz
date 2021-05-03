import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent545Component } from './test-component545.component';

describe('TestComponent545Component', () => {
  let component: TestComponent545Component;
  let fixture: ComponentFixture<TestComponent545Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent545Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
