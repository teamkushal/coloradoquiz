import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1574Component } from './test-component1574.component';

describe('TestComponent1574Component', () => {
  let component: TestComponent1574Component;
  let fixture: ComponentFixture<TestComponent1574Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1574Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
