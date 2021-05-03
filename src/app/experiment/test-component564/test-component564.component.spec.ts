import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent564Component } from './test-component564.component';

describe('TestComponent564Component', () => {
  let component: TestComponent564Component;
  let fixture: ComponentFixture<TestComponent564Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent564Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
