import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3852Component } from './test-component3852.component';

describe('TestComponent3852Component', () => {
  let component: TestComponent3852Component;
  let fixture: ComponentFixture<TestComponent3852Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3852Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
