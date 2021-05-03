import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2413Component } from './test-component2413.component';

describe('TestComponent2413Component', () => {
  let component: TestComponent2413Component;
  let fixture: ComponentFixture<TestComponent2413Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2413Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
