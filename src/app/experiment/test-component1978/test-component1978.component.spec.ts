import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1978Component } from './test-component1978.component';

describe('TestComponent1978Component', () => {
  let component: TestComponent1978Component;
  let fixture: ComponentFixture<TestComponent1978Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1978Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
