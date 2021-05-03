import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1540Component } from './test-component1540.component';

describe('TestComponent1540Component', () => {
  let component: TestComponent1540Component;
  let fixture: ComponentFixture<TestComponent1540Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1540Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
