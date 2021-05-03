import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2821Component } from './test-component2821.component';

describe('TestComponent2821Component', () => {
  let component: TestComponent2821Component;
  let fixture: ComponentFixture<TestComponent2821Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2821Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
