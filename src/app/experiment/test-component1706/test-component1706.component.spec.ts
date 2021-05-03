import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1706Component } from './test-component1706.component';

describe('TestComponent1706Component', () => {
  let component: TestComponent1706Component;
  let fixture: ComponentFixture<TestComponent1706Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1706Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
