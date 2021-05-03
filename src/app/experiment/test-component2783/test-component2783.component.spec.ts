import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2783Component } from './test-component2783.component';

describe('TestComponent2783Component', () => {
  let component: TestComponent2783Component;
  let fixture: ComponentFixture<TestComponent2783Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2783Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
