import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1771Component } from './test-component1771.component';

describe('TestComponent1771Component', () => {
  let component: TestComponent1771Component;
  let fixture: ComponentFixture<TestComponent1771Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1771Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
