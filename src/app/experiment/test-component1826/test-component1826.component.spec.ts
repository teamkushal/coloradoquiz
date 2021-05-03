import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1826Component } from './test-component1826.component';

describe('TestComponent1826Component', () => {
  let component: TestComponent1826Component;
  let fixture: ComponentFixture<TestComponent1826Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1826Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
