import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2998Component } from './test-component2998.component';

describe('TestComponent2998Component', () => {
  let component: TestComponent2998Component;
  let fixture: ComponentFixture<TestComponent2998Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2998Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
