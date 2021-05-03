import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2467Component } from './test-component2467.component';

describe('TestComponent2467Component', () => {
  let component: TestComponent2467Component;
  let fixture: ComponentFixture<TestComponent2467Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2467Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
