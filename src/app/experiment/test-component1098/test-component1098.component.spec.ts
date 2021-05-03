import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1098Component } from './test-component1098.component';

describe('TestComponent1098Component', () => {
  let component: TestComponent1098Component;
  let fixture: ComponentFixture<TestComponent1098Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1098Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
