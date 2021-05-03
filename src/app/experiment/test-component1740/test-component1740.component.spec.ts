import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1740Component } from './test-component1740.component';

describe('TestComponent1740Component', () => {
  let component: TestComponent1740Component;
  let fixture: ComponentFixture<TestComponent1740Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1740Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
