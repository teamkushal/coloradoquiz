import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2573Component } from './test-component2573.component';

describe('TestComponent2573Component', () => {
  let component: TestComponent2573Component;
  let fixture: ComponentFixture<TestComponent2573Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2573Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
