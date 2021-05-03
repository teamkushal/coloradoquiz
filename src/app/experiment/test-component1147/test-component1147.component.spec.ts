import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1147Component } from './test-component1147.component';

describe('TestComponent1147Component', () => {
  let component: TestComponent1147Component;
  let fixture: ComponentFixture<TestComponent1147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
