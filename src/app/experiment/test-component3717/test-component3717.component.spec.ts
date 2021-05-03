import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3717Component } from './test-component3717.component';

describe('TestComponent3717Component', () => {
  let component: TestComponent3717Component;
  let fixture: ComponentFixture<TestComponent3717Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3717Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
