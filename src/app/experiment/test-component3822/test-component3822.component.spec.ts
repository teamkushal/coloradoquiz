import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3822Component } from './test-component3822.component';

describe('TestComponent3822Component', () => {
  let component: TestComponent3822Component;
  let fixture: ComponentFixture<TestComponent3822Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3822Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
