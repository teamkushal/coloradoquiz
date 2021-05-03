import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3657Component } from './test-component3657.component';

describe('TestComponent3657Component', () => {
  let component: TestComponent3657Component;
  let fixture: ComponentFixture<TestComponent3657Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3657Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
