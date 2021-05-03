import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent881Component } from './test-component881.component';

describe('TestComponent881Component', () => {
  let component: TestComponent881Component;
  let fixture: ComponentFixture<TestComponent881Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent881Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
