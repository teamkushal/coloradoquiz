import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1009Component } from './test-component1009.component';

describe('TestComponent1009Component', () => {
  let component: TestComponent1009Component;
  let fixture: ComponentFixture<TestComponent1009Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1009Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
