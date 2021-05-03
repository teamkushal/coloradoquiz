import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1625Component } from './test-component1625.component';

describe('TestComponent1625Component', () => {
  let component: TestComponent1625Component;
  let fixture: ComponentFixture<TestComponent1625Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1625Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
