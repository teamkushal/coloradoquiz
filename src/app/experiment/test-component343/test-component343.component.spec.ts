import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent343Component } from './test-component343.component';

describe('TestComponent343Component', () => {
  let component: TestComponent343Component;
  let fixture: ComponentFixture<TestComponent343Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent343Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
