import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2627Component } from './test-component2627.component';

describe('TestComponent2627Component', () => {
  let component: TestComponent2627Component;
  let fixture: ComponentFixture<TestComponent2627Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2627Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
