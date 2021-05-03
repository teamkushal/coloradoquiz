import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2014Component } from './test-component2014.component';

describe('TestComponent2014Component', () => {
  let component: TestComponent2014Component;
  let fixture: ComponentFixture<TestComponent2014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2014Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
