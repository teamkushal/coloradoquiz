import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent718Component } from './test-component718.component';

describe('TestComponent718Component', () => {
  let component: TestComponent718Component;
  let fixture: ComponentFixture<TestComponent718Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent718Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
