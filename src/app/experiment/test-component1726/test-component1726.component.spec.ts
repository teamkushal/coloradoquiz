import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1726Component } from './test-component1726.component';

describe('TestComponent1726Component', () => {
  let component: TestComponent1726Component;
  let fixture: ComponentFixture<TestComponent1726Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1726Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
