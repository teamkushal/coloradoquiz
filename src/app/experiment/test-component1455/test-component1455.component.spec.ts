import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1455Component } from './test-component1455.component';

describe('TestComponent1455Component', () => {
  let component: TestComponent1455Component;
  let fixture: ComponentFixture<TestComponent1455Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1455Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
