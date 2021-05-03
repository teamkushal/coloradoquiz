import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1792Component } from './test-component1792.component';

describe('TestComponent1792Component', () => {
  let component: TestComponent1792Component;
  let fixture: ComponentFixture<TestComponent1792Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1792Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
