import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1312Component } from './test-component1312.component';

describe('TestComponent1312Component', () => {
  let component: TestComponent1312Component;
  let fixture: ComponentFixture<TestComponent1312Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1312Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
