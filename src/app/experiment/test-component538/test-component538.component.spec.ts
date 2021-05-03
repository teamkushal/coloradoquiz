import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent538Component } from './test-component538.component';

describe('TestComponent538Component', () => {
  let component: TestComponent538Component;
  let fixture: ComponentFixture<TestComponent538Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent538Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
