import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2246Component } from './test-component2246.component';

describe('TestComponent2246Component', () => {
  let component: TestComponent2246Component;
  let fixture: ComponentFixture<TestComponent2246Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2246Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
