import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2790Component } from './test-component2790.component';

describe('TestComponent2790Component', () => {
  let component: TestComponent2790Component;
  let fixture: ComponentFixture<TestComponent2790Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2790Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
