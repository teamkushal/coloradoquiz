import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2167Component } from './test-component2167.component';

describe('TestComponent2167Component', () => {
  let component: TestComponent2167Component;
  let fixture: ComponentFixture<TestComponent2167Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2167Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
