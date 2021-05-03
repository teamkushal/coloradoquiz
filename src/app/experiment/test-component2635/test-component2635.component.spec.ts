import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2635Component } from './test-component2635.component';

describe('TestComponent2635Component', () => {
  let component: TestComponent2635Component;
  let fixture: ComponentFixture<TestComponent2635Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2635Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
