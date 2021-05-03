import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1815Component } from './test-component1815.component';

describe('TestComponent1815Component', () => {
  let component: TestComponent1815Component;
  let fixture: ComponentFixture<TestComponent1815Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1815Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
