import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2069Component } from './test-component2069.component';

describe('TestComponent2069Component', () => {
  let component: TestComponent2069Component;
  let fixture: ComponentFixture<TestComponent2069Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2069Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
