import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent494Component } from './test-component494.component';

describe('TestComponent494Component', () => {
  let component: TestComponent494Component;
  let fixture: ComponentFixture<TestComponent494Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent494Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
