import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1692Component } from './test-component1692.component';

describe('TestComponent1692Component', () => {
  let component: TestComponent1692Component;
  let fixture: ComponentFixture<TestComponent1692Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1692Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
