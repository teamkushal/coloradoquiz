import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2824Component } from './test-component2824.component';

describe('TestComponent2824Component', () => {
  let component: TestComponent2824Component;
  let fixture: ComponentFixture<TestComponent2824Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2824Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
