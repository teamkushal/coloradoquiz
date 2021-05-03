import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1720Component } from './test-component1720.component';

describe('TestComponent1720Component', () => {
  let component: TestComponent1720Component;
  let fixture: ComponentFixture<TestComponent1720Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1720Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
