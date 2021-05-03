import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1478Component } from './test-component1478.component';

describe('TestComponent1478Component', () => {
  let component: TestComponent1478Component;
  let fixture: ComponentFixture<TestComponent1478Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1478Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
