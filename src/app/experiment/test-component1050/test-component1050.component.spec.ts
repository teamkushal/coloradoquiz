import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1050Component } from './test-component1050.component';

describe('TestComponent1050Component', () => {
  let component: TestComponent1050Component;
  let fixture: ComponentFixture<TestComponent1050Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1050Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
