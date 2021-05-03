import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2343Component } from './test-component2343.component';

describe('TestComponent2343Component', () => {
  let component: TestComponent2343Component;
  let fixture: ComponentFixture<TestComponent2343Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2343Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
