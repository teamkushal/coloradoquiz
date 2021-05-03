import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1827Component } from './test-component1827.component';

describe('TestComponent1827Component', () => {
  let component: TestComponent1827Component;
  let fixture: ComponentFixture<TestComponent1827Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1827Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
