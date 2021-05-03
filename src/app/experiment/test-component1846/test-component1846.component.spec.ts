import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1846Component } from './test-component1846.component';

describe('TestComponent1846Component', () => {
  let component: TestComponent1846Component;
  let fixture: ComponentFixture<TestComponent1846Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1846Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
