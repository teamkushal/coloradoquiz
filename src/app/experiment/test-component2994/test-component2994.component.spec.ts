import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2994Component } from './test-component2994.component';

describe('TestComponent2994Component', () => {
  let component: TestComponent2994Component;
  let fixture: ComponentFixture<TestComponent2994Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2994Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
