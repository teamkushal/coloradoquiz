import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1852Component } from './test-component1852.component';

describe('TestComponent1852Component', () => {
  let component: TestComponent1852Component;
  let fixture: ComponentFixture<TestComponent1852Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1852Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
