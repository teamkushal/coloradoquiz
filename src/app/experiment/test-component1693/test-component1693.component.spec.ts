import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1693Component } from './test-component1693.component';

describe('TestComponent1693Component', () => {
  let component: TestComponent1693Component;
  let fixture: ComponentFixture<TestComponent1693Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1693Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
