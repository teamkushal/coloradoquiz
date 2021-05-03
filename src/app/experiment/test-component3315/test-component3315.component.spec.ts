import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3315Component } from './test-component3315.component';

describe('TestComponent3315Component', () => {
  let component: TestComponent3315Component;
  let fixture: ComponentFixture<TestComponent3315Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3315Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
