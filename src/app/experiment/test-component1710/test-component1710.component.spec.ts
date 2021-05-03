import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1710Component } from './test-component1710.component';

describe('TestComponent1710Component', () => {
  let component: TestComponent1710Component;
  let fixture: ComponentFixture<TestComponent1710Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1710Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
