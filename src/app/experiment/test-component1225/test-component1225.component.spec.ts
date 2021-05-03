import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1225Component } from './test-component1225.component';

describe('TestComponent1225Component', () => {
  let component: TestComponent1225Component;
  let fixture: ComponentFixture<TestComponent1225Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1225Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
