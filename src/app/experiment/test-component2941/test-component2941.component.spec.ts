import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2941Component } from './test-component2941.component';

describe('TestComponent2941Component', () => {
  let component: TestComponent2941Component;
  let fixture: ComponentFixture<TestComponent2941Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2941Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
