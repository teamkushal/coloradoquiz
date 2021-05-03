import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1622Component } from './test-component1622.component';

describe('TestComponent1622Component', () => {
  let component: TestComponent1622Component;
  let fixture: ComponentFixture<TestComponent1622Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1622Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
