import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1315Component } from './test-component1315.component';

describe('TestComponent1315Component', () => {
  let component: TestComponent1315Component;
  let fixture: ComponentFixture<TestComponent1315Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1315Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
