import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent797Component } from './test-component797.component';

describe('TestComponent797Component', () => {
  let component: TestComponent797Component;
  let fixture: ComponentFixture<TestComponent797Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent797Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
