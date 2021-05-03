import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1564Component } from './test-component1564.component';

describe('TestComponent1564Component', () => {
  let component: TestComponent1564Component;
  let fixture: ComponentFixture<TestComponent1564Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1564Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
