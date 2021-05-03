import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2535Component } from './test-component2535.component';

describe('TestComponent2535Component', () => {
  let component: TestComponent2535Component;
  let fixture: ComponentFixture<TestComponent2535Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2535Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
