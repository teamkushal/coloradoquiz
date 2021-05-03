import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1011Component } from './test-component1011.component';

describe('TestComponent1011Component', () => {
  let component: TestComponent1011Component;
  let fixture: ComponentFixture<TestComponent1011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1011Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
