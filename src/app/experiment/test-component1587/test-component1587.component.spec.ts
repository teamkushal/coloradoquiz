import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1587Component } from './test-component1587.component';

describe('TestComponent1587Component', () => {
  let component: TestComponent1587Component;
  let fixture: ComponentFixture<TestComponent1587Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1587Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
