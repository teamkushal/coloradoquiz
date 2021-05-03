import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2507Component } from './test-component2507.component';

describe('TestComponent2507Component', () => {
  let component: TestComponent2507Component;
  let fixture: ComponentFixture<TestComponent2507Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2507Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
