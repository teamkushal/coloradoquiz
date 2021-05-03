import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2307Component } from './test-component2307.component';

describe('TestComponent2307Component', () => {
  let component: TestComponent2307Component;
  let fixture: ComponentFixture<TestComponent2307Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2307Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
