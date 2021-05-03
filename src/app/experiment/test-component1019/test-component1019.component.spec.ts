import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1019Component } from './test-component1019.component';

describe('TestComponent1019Component', () => {
  let component: TestComponent1019Component;
  let fixture: ComponentFixture<TestComponent1019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
