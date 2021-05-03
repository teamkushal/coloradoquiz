import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1294Component } from './test-component1294.component';

describe('TestComponent1294Component', () => {
  let component: TestComponent1294Component;
  let fixture: ComponentFixture<TestComponent1294Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1294Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
