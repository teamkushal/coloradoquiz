import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3369Component } from './test-component3369.component';

describe('TestComponent3369Component', () => {
  let component: TestComponent3369Component;
  let fixture: ComponentFixture<TestComponent3369Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3369Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
