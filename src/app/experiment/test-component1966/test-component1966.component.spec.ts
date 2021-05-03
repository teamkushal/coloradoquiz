import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1966Component } from './test-component1966.component';

describe('TestComponent1966Component', () => {
  let component: TestComponent1966Component;
  let fixture: ComponentFixture<TestComponent1966Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1966Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
