import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1031Component } from './test-component1031.component';

describe('TestComponent1031Component', () => {
  let component: TestComponent1031Component;
  let fixture: ComponentFixture<TestComponent1031Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1031Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
