import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent852Component } from './test-component852.component';

describe('TestComponent852Component', () => {
  let component: TestComponent852Component;
  let fixture: ComponentFixture<TestComponent852Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent852Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
