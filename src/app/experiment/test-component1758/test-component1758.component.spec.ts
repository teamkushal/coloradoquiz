import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1758Component } from './test-component1758.component';

describe('TestComponent1758Component', () => {
  let component: TestComponent1758Component;
  let fixture: ComponentFixture<TestComponent1758Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1758Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
