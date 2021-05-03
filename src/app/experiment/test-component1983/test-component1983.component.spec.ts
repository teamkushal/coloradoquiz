import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1983Component } from './test-component1983.component';

describe('TestComponent1983Component', () => {
  let component: TestComponent1983Component;
  let fixture: ComponentFixture<TestComponent1983Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1983Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
