import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent429Component } from './test-component429.component';

describe('TestComponent429Component', () => {
  let component: TestComponent429Component;
  let fixture: ComponentFixture<TestComponent429Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent429Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
