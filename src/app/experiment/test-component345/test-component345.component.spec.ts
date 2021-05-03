import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent345Component } from './test-component345.component';

describe('TestComponent345Component', () => {
  let component: TestComponent345Component;
  let fixture: ComponentFixture<TestComponent345Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent345Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
