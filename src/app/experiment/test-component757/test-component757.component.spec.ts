import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent757Component } from './test-component757.component';

describe('TestComponent757Component', () => {
  let component: TestComponent757Component;
  let fixture: ComponentFixture<TestComponent757Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent757Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
