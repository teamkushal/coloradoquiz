import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3338Component } from './test-component3338.component';

describe('TestComponent3338Component', () => {
  let component: TestComponent3338Component;
  let fixture: ComponentFixture<TestComponent3338Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3338Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
