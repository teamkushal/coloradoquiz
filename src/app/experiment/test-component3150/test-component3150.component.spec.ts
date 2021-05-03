import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3150Component } from './test-component3150.component';

describe('TestComponent3150Component', () => {
  let component: TestComponent3150Component;
  let fixture: ComponentFixture<TestComponent3150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
