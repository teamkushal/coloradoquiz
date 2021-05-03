import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2446Component } from './test-component2446.component';

describe('TestComponent2446Component', () => {
  let component: TestComponent2446Component;
  let fixture: ComponentFixture<TestComponent2446Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2446Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
