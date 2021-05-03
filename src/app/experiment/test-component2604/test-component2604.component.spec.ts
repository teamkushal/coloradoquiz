import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2604Component } from './test-component2604.component';

describe('TestComponent2604Component', () => {
  let component: TestComponent2604Component;
  let fixture: ComponentFixture<TestComponent2604Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2604Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
