import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1490Component } from './test-component1490.component';

describe('TestComponent1490Component', () => {
  let component: TestComponent1490Component;
  let fixture: ComponentFixture<TestComponent1490Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1490Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
