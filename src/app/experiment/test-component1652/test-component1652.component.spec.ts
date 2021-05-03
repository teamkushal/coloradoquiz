import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1652Component } from './test-component1652.component';

describe('TestComponent1652Component', () => {
  let component: TestComponent1652Component;
  let fixture: ComponentFixture<TestComponent1652Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1652Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
