import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent587Component } from './test-component587.component';

describe('TestComponent587Component', () => {
  let component: TestComponent587Component;
  let fixture: ComponentFixture<TestComponent587Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent587Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
