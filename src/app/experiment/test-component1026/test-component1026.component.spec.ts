import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1026Component } from './test-component1026.component';

describe('TestComponent1026Component', () => {
  let component: TestComponent1026Component;
  let fixture: ComponentFixture<TestComponent1026Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1026Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
