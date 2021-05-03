import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1569Component } from './test-component1569.component';

describe('TestComponent1569Component', () => {
  let component: TestComponent1569Component;
  let fixture: ComponentFixture<TestComponent1569Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1569Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
