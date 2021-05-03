import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1741Component } from './test-component1741.component';

describe('TestComponent1741Component', () => {
  let component: TestComponent1741Component;
  let fixture: ComponentFixture<TestComponent1741Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1741Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
