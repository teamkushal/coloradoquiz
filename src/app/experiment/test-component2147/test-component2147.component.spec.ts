import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2147Component } from './test-component2147.component';

describe('TestComponent2147Component', () => {
  let component: TestComponent2147Component;
  let fixture: ComponentFixture<TestComponent2147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
