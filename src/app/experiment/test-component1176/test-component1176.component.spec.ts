import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1176Component } from './test-component1176.component';

describe('TestComponent1176Component', () => {
  let component: TestComponent1176Component;
  let fixture: ComponentFixture<TestComponent1176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1176Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
