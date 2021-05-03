import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1763Component } from './test-component1763.component';

describe('TestComponent1763Component', () => {
  let component: TestComponent1763Component;
  let fixture: ComponentFixture<TestComponent1763Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1763Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
