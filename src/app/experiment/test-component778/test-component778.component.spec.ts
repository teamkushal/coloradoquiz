import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent778Component } from './test-component778.component';

describe('TestComponent778Component', () => {
  let component: TestComponent778Component;
  let fixture: ComponentFixture<TestComponent778Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent778Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
