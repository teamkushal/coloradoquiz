import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2865Component } from './test-component2865.component';

describe('TestComponent2865Component', () => {
  let component: TestComponent2865Component;
  let fixture: ComponentFixture<TestComponent2865Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2865Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
