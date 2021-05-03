import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1282Component } from './test-component1282.component';

describe('TestComponent1282Component', () => {
  let component: TestComponent1282Component;
  let fixture: ComponentFixture<TestComponent1282Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1282Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
