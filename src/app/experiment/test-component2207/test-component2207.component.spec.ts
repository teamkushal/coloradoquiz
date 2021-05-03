import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2207Component } from './test-component2207.component';

describe('TestComponent2207Component', () => {
  let component: TestComponent2207Component;
  let fixture: ComponentFixture<TestComponent2207Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2207Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
