import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent100Component } from './test-component100.component';

describe('TestComponent100Component', () => {
  let component: TestComponent100Component;
  let fixture: ComponentFixture<TestComponent100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
