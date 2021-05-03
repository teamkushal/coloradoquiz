import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2294Component } from './test-component2294.component';

describe('TestComponent2294Component', () => {
  let component: TestComponent2294Component;
  let fixture: ComponentFixture<TestComponent2294Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2294Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
