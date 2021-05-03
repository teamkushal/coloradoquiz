import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1760Component } from './test-component1760.component';

describe('TestComponent1760Component', () => {
  let component: TestComponent1760Component;
  let fixture: ComponentFixture<TestComponent1760Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1760Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
