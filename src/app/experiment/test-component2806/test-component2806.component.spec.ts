import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2806Component } from './test-component2806.component';

describe('TestComponent2806Component', () => {
  let component: TestComponent2806Component;
  let fixture: ComponentFixture<TestComponent2806Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2806Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
