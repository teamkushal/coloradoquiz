import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1967Component } from './test-component1967.component';

describe('TestComponent1967Component', () => {
  let component: TestComponent1967Component;
  let fixture: ComponentFixture<TestComponent1967Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1967Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
