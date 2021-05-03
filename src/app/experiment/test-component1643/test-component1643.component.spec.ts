import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1643Component } from './test-component1643.component';

describe('TestComponent1643Component', () => {
  let component: TestComponent1643Component;
  let fixture: ComponentFixture<TestComponent1643Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1643Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
