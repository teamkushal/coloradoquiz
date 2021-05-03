import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1660Component } from './test-component1660.component';

describe('TestComponent1660Component', () => {
  let component: TestComponent1660Component;
  let fixture: ComponentFixture<TestComponent1660Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1660Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
