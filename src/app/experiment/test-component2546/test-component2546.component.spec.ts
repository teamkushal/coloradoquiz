import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2546Component } from './test-component2546.component';

describe('TestComponent2546Component', () => {
  let component: TestComponent2546Component;
  let fixture: ComponentFixture<TestComponent2546Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2546Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
