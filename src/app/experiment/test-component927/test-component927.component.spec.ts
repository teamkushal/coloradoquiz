import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent927Component } from './test-component927.component';

describe('TestComponent927Component', () => {
  let component: TestComponent927Component;
  let fixture: ComponentFixture<TestComponent927Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent927Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
