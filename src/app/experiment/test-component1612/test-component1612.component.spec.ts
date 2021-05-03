import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1612Component } from './test-component1612.component';

describe('TestComponent1612Component', () => {
  let component: TestComponent1612Component;
  let fixture: ComponentFixture<TestComponent1612Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1612Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
