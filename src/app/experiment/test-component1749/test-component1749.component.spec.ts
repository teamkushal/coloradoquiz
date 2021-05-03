import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1749Component } from './test-component1749.component';

describe('TestComponent1749Component', () => {
  let component: TestComponent1749Component;
  let fixture: ComponentFixture<TestComponent1749Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1749Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
