import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1243Component } from './test-component1243.component';

describe('TestComponent1243Component', () => {
  let component: TestComponent1243Component;
  let fixture: ComponentFixture<TestComponent1243Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1243Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
