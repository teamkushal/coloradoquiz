import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent447Component } from './test-component447.component';

describe('TestComponent447Component', () => {
  let component: TestComponent447Component;
  let fixture: ComponentFixture<TestComponent447Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent447Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
