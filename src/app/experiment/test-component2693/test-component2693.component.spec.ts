import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2693Component } from './test-component2693.component';

describe('TestComponent2693Component', () => {
  let component: TestComponent2693Component;
  let fixture: ComponentFixture<TestComponent2693Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2693Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
