import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1628Component } from './test-component1628.component';

describe('TestComponent1628Component', () => {
  let component: TestComponent1628Component;
  let fixture: ComponentFixture<TestComponent1628Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1628Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
