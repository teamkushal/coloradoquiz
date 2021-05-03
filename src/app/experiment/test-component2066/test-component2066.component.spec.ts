import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2066Component } from './test-component2066.component';

describe('TestComponent2066Component', () => {
  let component: TestComponent2066Component;
  let fixture: ComponentFixture<TestComponent2066Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2066Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
