import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2117Component } from './test-component2117.component';

describe('TestComponent2117Component', () => {
  let component: TestComponent2117Component;
  let fixture: ComponentFixture<TestComponent2117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2117Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
