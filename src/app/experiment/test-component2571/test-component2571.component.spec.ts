import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2571Component } from './test-component2571.component';

describe('TestComponent2571Component', () => {
  let component: TestComponent2571Component;
  let fixture: ComponentFixture<TestComponent2571Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2571Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
