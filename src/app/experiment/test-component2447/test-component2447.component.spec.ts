import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2447Component } from './test-component2447.component';

describe('TestComponent2447Component', () => {
  let component: TestComponent2447Component;
  let fixture: ComponentFixture<TestComponent2447Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2447Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
