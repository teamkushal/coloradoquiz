import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1440Component } from './test-component1440.component';

describe('TestComponent1440Component', () => {
  let component: TestComponent1440Component;
  let fixture: ComponentFixture<TestComponent1440Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1440Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
