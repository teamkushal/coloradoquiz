import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2969Component } from './test-component2969.component';

describe('TestComponent2969Component', () => {
  let component: TestComponent2969Component;
  let fixture: ComponentFixture<TestComponent2969Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2969Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
