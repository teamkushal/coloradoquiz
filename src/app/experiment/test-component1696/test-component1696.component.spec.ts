import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1696Component } from './test-component1696.component';

describe('TestComponent1696Component', () => {
  let component: TestComponent1696Component;
  let fixture: ComponentFixture<TestComponent1696Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1696Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
