import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1188Component } from './test-component1188.component';

describe('TestComponent1188Component', () => {
  let component: TestComponent1188Component;
  let fixture: ComponentFixture<TestComponent1188Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1188Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
