import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3954Component } from './test-component3954.component';

describe('TestComponent3954Component', () => {
  let component: TestComponent3954Component;
  let fixture: ComponentFixture<TestComponent3954Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3954Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
