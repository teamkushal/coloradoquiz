import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1446Component } from './test-component1446.component';

describe('TestComponent1446Component', () => {
  let component: TestComponent1446Component;
  let fixture: ComponentFixture<TestComponent1446Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1446Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
