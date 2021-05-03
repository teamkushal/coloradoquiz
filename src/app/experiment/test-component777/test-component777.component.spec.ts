import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent777Component } from './test-component777.component';

describe('TestComponent777Component', () => {
  let component: TestComponent777Component;
  let fixture: ComponentFixture<TestComponent777Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent777Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
