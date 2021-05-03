import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3870Component } from './test-component3870.component';

describe('TestComponent3870Component', () => {
  let component: TestComponent3870Component;
  let fixture: ComponentFixture<TestComponent3870Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3870Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
