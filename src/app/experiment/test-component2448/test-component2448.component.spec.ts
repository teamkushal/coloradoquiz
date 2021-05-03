import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2448Component } from './test-component2448.component';

describe('TestComponent2448Component', () => {
  let component: TestComponent2448Component;
  let fixture: ComponentFixture<TestComponent2448Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2448Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
