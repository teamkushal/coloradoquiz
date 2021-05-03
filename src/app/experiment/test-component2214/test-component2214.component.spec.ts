import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2214Component } from './test-component2214.component';

describe('TestComponent2214Component', () => {
  let component: TestComponent2214Component;
  let fixture: ComponentFixture<TestComponent2214Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2214Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
