import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent876Component } from './test-component876.component';

describe('TestComponent876Component', () => {
  let component: TestComponent876Component;
  let fixture: ComponentFixture<TestComponent876Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent876Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
