import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1010Component } from './test-component1010.component';

describe('TestComponent1010Component', () => {
  let component: TestComponent1010Component;
  let fixture: ComponentFixture<TestComponent1010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1010Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
