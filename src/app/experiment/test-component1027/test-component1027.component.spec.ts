import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1027Component } from './test-component1027.component';

describe('TestComponent1027Component', () => {
  let component: TestComponent1027Component;
  let fixture: ComponentFixture<TestComponent1027Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1027Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
