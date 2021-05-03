import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2803Component } from './test-component2803.component';

describe('TestComponent2803Component', () => {
  let component: TestComponent2803Component;
  let fixture: ComponentFixture<TestComponent2803Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2803Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
