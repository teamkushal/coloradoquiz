import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1021Component } from './test-component1021.component';

describe('TestComponent1021Component', () => {
  let component: TestComponent1021Component;
  let fixture: ComponentFixture<TestComponent1021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
