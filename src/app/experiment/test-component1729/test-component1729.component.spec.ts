import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1729Component } from './test-component1729.component';

describe('TestComponent1729Component', () => {
  let component: TestComponent1729Component;
  let fixture: ComponentFixture<TestComponent1729Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1729Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
