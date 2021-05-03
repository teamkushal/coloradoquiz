import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent149Component } from './test-component149.component';

describe('TestComponent149Component', () => {
  let component: TestComponent149Component;
  let fixture: ComponentFixture<TestComponent149Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent149Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
