import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent901Component } from './test-component901.component';

describe('TestComponent901Component', () => {
  let component: TestComponent901Component;
  let fixture: ComponentFixture<TestComponent901Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent901Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
