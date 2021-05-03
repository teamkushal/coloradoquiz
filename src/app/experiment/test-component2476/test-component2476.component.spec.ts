import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2476Component } from './test-component2476.component';

describe('TestComponent2476Component', () => {
  let component: TestComponent2476Component;
  let fixture: ComponentFixture<TestComponent2476Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2476Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
