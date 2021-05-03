import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1848Component } from './test-component1848.component';

describe('TestComponent1848Component', () => {
  let component: TestComponent1848Component;
  let fixture: ComponentFixture<TestComponent1848Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1848Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
