import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2527Component } from './test-component2527.component';

describe('TestComponent2527Component', () => {
  let component: TestComponent2527Component;
  let fixture: ComponentFixture<TestComponent2527Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2527Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
