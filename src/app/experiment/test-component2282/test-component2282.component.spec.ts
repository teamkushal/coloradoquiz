import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2282Component } from './test-component2282.component';

describe('TestComponent2282Component', () => {
  let component: TestComponent2282Component;
  let fixture: ComponentFixture<TestComponent2282Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2282Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
