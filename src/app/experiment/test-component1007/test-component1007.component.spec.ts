import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1007Component } from './test-component1007.component';

describe('TestComponent1007Component', () => {
  let component: TestComponent1007Component;
  let fixture: ComponentFixture<TestComponent1007Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1007Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
