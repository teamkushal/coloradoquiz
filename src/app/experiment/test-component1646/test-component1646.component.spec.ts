import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1646Component } from './test-component1646.component';

describe('TestComponent1646Component', () => {
  let component: TestComponent1646Component;
  let fixture: ComponentFixture<TestComponent1646Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1646Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
