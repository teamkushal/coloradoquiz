import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1219Component } from './test-component1219.component';

describe('TestComponent1219Component', () => {
  let component: TestComponent1219Component;
  let fixture: ComponentFixture<TestComponent1219Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1219Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
