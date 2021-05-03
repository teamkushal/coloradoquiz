import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent704Component } from './test-component704.component';

describe('TestComponent704Component', () => {
  let component: TestComponent704Component;
  let fixture: ComponentFixture<TestComponent704Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent704Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
