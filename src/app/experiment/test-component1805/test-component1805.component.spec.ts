import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1805Component } from './test-component1805.component';

describe('TestComponent1805Component', () => {
  let component: TestComponent1805Component;
  let fixture: ComponentFixture<TestComponent1805Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1805Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
