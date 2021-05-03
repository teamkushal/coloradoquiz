import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent272Component } from './test-component272.component';

describe('TestComponent272Component', () => {
  let component: TestComponent272Component;
  let fixture: ComponentFixture<TestComponent272Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent272Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
