import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1680Component } from './test-component1680.component';

describe('TestComponent1680Component', () => {
  let component: TestComponent1680Component;
  let fixture: ComponentFixture<TestComponent1680Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1680Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
