import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2426Component } from './test-component2426.component';

describe('TestComponent2426Component', () => {
  let component: TestComponent2426Component;
  let fixture: ComponentFixture<TestComponent2426Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2426Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
