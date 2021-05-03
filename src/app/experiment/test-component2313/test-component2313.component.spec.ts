import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2313Component } from './test-component2313.component';

describe('TestComponent2313Component', () => {
  let component: TestComponent2313Component;
  let fixture: ComponentFixture<TestComponent2313Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2313Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
