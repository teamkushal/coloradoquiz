import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent686Component } from './test-component686.component';

describe('TestComponent686Component', () => {
  let component: TestComponent686Component;
  let fixture: ComponentFixture<TestComponent686Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent686Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
