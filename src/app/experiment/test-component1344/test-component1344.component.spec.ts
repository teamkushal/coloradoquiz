import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1344Component } from './test-component1344.component';

describe('TestComponent1344Component', () => {
  let component: TestComponent1344Component;
  let fixture: ComponentFixture<TestComponent1344Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1344Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
