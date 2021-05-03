import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1541Component } from './test-component1541.component';

describe('TestComponent1541Component', () => {
  let component: TestComponent1541Component;
  let fixture: ComponentFixture<TestComponent1541Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1541Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
