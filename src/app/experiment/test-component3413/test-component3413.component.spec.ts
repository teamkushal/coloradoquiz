import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3413Component } from './test-component3413.component';

describe('TestComponent3413Component', () => {
  let component: TestComponent3413Component;
  let fixture: ComponentFixture<TestComponent3413Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3413Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
