import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent114Component } from './test-component114.component';

describe('TestComponent114Component', () => {
  let component: TestComponent114Component;
  let fixture: ComponentFixture<TestComponent114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
