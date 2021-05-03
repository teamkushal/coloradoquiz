import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1888Component } from './test-component1888.component';

describe('TestComponent1888Component', () => {
  let component: TestComponent1888Component;
  let fixture: ComponentFixture<TestComponent1888Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1888Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
