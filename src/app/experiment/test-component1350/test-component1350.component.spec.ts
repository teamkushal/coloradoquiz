import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1350Component } from './test-component1350.component';

describe('TestComponent1350Component', () => {
  let component: TestComponent1350Component;
  let fixture: ComponentFixture<TestComponent1350Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1350Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
