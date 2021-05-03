import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3014Component } from './test-component3014.component';

describe('TestComponent3014Component', () => {
  let component: TestComponent3014Component;
  let fixture: ComponentFixture<TestComponent3014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3014Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
