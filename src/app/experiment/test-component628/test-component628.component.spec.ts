import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent628Component } from './test-component628.component';

describe('TestComponent628Component', () => {
  let component: TestComponent628Component;
  let fixture: ComponentFixture<TestComponent628Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent628Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
