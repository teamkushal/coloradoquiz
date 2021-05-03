import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1290Component } from './test-component1290.component';

describe('TestComponent1290Component', () => {
  let component: TestComponent1290Component;
  let fixture: ComponentFixture<TestComponent1290Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1290Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
