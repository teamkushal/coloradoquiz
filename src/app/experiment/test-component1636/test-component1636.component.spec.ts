import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1636Component } from './test-component1636.component';

describe('TestComponent1636Component', () => {
  let component: TestComponent1636Component;
  let fixture: ComponentFixture<TestComponent1636Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1636Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
