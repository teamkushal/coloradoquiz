import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1407Component } from './test-component1407.component';

describe('TestComponent1407Component', () => {
  let component: TestComponent1407Component;
  let fixture: ComponentFixture<TestComponent1407Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1407Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
