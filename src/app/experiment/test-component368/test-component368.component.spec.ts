import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent368Component } from './test-component368.component';

describe('TestComponent368Component', () => {
  let component: TestComponent368Component;
  let fixture: ComponentFixture<TestComponent368Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent368Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
