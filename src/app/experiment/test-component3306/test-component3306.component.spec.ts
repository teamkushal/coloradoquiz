import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3306Component } from './test-component3306.component';

describe('TestComponent3306Component', () => {
  let component: TestComponent3306Component;
  let fixture: ComponentFixture<TestComponent3306Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3306Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
