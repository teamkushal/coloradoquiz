import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2534Component } from './test-component2534.component';

describe('TestComponent2534Component', () => {
  let component: TestComponent2534Component;
  let fixture: ComponentFixture<TestComponent2534Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2534Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
