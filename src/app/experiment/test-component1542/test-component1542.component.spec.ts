import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1542Component } from './test-component1542.component';

describe('TestComponent1542Component', () => {
  let component: TestComponent1542Component;
  let fixture: ComponentFixture<TestComponent1542Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1542Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
