import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent229Component } from './test-component229.component';

describe('TestComponent229Component', () => {
  let component: TestComponent229Component;
  let fixture: ComponentFixture<TestComponent229Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent229Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
