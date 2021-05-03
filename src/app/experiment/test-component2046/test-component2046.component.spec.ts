import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2046Component } from './test-component2046.component';

describe('TestComponent2046Component', () => {
  let component: TestComponent2046Component;
  let fixture: ComponentFixture<TestComponent2046Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2046Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
