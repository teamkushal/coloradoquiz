import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1911Component } from './test-component1911.component';

describe('TestComponent1911Component', () => {
  let component: TestComponent1911Component;
  let fixture: ComponentFixture<TestComponent1911Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1911Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
