import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3704Component } from './test-component3704.component';

describe('TestComponent3704Component', () => {
  let component: TestComponent3704Component;
  let fixture: ComponentFixture<TestComponent3704Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3704Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
