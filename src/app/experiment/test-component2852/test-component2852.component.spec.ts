import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2852Component } from './test-component2852.component';

describe('TestComponent2852Component', () => {
  let component: TestComponent2852Component;
  let fixture: ComponentFixture<TestComponent2852Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2852Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
