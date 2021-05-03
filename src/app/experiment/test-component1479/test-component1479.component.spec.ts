import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1479Component } from './test-component1479.component';

describe('TestComponent1479Component', () => {
  let component: TestComponent1479Component;
  let fixture: ComponentFixture<TestComponent1479Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1479Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
