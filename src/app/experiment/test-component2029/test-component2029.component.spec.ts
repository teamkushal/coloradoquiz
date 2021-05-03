import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2029Component } from './test-component2029.component';

describe('TestComponent2029Component', () => {
  let component: TestComponent2029Component;
  let fixture: ComponentFixture<TestComponent2029Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2029Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
