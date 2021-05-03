import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1786Component } from './test-component1786.component';

describe('TestComponent1786Component', () => {
  let component: TestComponent1786Component;
  let fixture: ComponentFixture<TestComponent1786Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1786Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
