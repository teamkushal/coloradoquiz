import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1811Component } from './test-component1811.component';

describe('TestComponent1811Component', () => {
  let component: TestComponent1811Component;
  let fixture: ComponentFixture<TestComponent1811Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1811Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
