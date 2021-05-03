import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2686Component } from './test-component2686.component';

describe('TestComponent2686Component', () => {
  let component: TestComponent2686Component;
  let fixture: ComponentFixture<TestComponent2686Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2686Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
