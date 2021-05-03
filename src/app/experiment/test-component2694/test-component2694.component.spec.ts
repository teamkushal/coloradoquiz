import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2694Component } from './test-component2694.component';

describe('TestComponent2694Component', () => {
  let component: TestComponent2694Component;
  let fixture: ComponentFixture<TestComponent2694Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2694Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
