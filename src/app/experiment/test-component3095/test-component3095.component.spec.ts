import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3095Component } from './test-component3095.component';

describe('TestComponent3095Component', () => {
  let component: TestComponent3095Component;
  let fixture: ComponentFixture<TestComponent3095Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3095Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
