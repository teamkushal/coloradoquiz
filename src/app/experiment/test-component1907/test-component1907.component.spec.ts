import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1907Component } from './test-component1907.component';

describe('TestComponent1907Component', () => {
  let component: TestComponent1907Component;
  let fixture: ComponentFixture<TestComponent1907Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1907Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
