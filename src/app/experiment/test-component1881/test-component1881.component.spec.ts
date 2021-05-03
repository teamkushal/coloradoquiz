import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1881Component } from './test-component1881.component';

describe('TestComponent1881Component', () => {
  let component: TestComponent1881Component;
  let fixture: ComponentFixture<TestComponent1881Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1881Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
