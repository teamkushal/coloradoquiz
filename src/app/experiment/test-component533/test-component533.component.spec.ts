import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent533Component } from './test-component533.component';

describe('TestComponent533Component', () => {
  let component: TestComponent533Component;
  let fixture: ComponentFixture<TestComponent533Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent533Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
