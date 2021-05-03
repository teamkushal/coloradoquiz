import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3571Component } from './test-component3571.component';

describe('TestComponent3571Component', () => {
  let component: TestComponent3571Component;
  let fixture: ComponentFixture<TestComponent3571Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3571Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
