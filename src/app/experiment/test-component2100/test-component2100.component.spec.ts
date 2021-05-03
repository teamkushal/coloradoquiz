import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2100Component } from './test-component2100.component';

describe('TestComponent2100Component', () => {
  let component: TestComponent2100Component;
  let fixture: ComponentFixture<TestComponent2100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
