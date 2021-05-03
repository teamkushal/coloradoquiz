import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1883Component } from './test-component1883.component';

describe('TestComponent1883Component', () => {
  let component: TestComponent1883Component;
  let fixture: ComponentFixture<TestComponent1883Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1883Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
