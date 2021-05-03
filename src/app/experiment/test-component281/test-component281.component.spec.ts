import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent281Component } from './test-component281.component';

describe('TestComponent281Component', () => {
  let component: TestComponent281Component;
  let fixture: ComponentFixture<TestComponent281Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent281Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
