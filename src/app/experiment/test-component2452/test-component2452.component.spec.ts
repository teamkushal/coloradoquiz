import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2452Component } from './test-component2452.component';

describe('TestComponent2452Component', () => {
  let component: TestComponent2452Component;
  let fixture: ComponentFixture<TestComponent2452Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2452Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
