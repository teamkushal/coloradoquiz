import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2988Component } from './test-component2988.component';

describe('TestComponent2988Component', () => {
  let component: TestComponent2988Component;
  let fixture: ComponentFixture<TestComponent2988Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2988Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
