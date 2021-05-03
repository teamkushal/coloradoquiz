import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent594Component } from './test-component594.component';

describe('TestComponent594Component', () => {
  let component: TestComponent594Component;
  let fixture: ComponentFixture<TestComponent594Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent594Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
