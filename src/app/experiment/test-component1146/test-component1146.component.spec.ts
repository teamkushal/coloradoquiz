import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1146Component } from './test-component1146.component';

describe('TestComponent1146Component', () => {
  let component: TestComponent1146Component;
  let fixture: ComponentFixture<TestComponent1146Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1146Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
