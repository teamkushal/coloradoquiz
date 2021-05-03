import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2319Component } from './test-component2319.component';

describe('TestComponent2319Component', () => {
  let component: TestComponent2319Component;
  let fixture: ComponentFixture<TestComponent2319Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2319Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
