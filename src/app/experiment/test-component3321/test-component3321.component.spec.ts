import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3321Component } from './test-component3321.component';

describe('TestComponent3321Component', () => {
  let component: TestComponent3321Component;
  let fixture: ComponentFixture<TestComponent3321Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3321Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
