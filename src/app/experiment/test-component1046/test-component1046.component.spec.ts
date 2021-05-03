import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1046Component } from './test-component1046.component';

describe('TestComponent1046Component', () => {
  let component: TestComponent1046Component;
  let fixture: ComponentFixture<TestComponent1046Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1046Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
