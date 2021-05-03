import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1929Component } from './test-component1929.component';

describe('TestComponent1929Component', () => {
  let component: TestComponent1929Component;
  let fixture: ComponentFixture<TestComponent1929Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1929Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
