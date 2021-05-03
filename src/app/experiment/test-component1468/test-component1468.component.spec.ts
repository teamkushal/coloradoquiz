import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1468Component } from './test-component1468.component';

describe('TestComponent1468Component', () => {
  let component: TestComponent1468Component;
  let fixture: ComponentFixture<TestComponent1468Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1468Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
