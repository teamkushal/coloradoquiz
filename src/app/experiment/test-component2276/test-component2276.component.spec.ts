import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2276Component } from './test-component2276.component';

describe('TestComponent2276Component', () => {
  let component: TestComponent2276Component;
  let fixture: ComponentFixture<TestComponent2276Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2276Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
