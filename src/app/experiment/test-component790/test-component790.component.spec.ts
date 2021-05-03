import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent790Component } from './test-component790.component';

describe('TestComponent790Component', () => {
  let component: TestComponent790Component;
  let fixture: ComponentFixture<TestComponent790Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent790Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
