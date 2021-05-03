import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2060Component } from './test-component2060.component';

describe('TestComponent2060Component', () => {
  let component: TestComponent2060Component;
  let fixture: ComponentFixture<TestComponent2060Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2060Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
