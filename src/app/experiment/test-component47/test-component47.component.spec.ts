import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent47Component } from './test-component47.component';

describe('TestComponent47Component', () => {
  let component: TestComponent47Component;
  let fixture: ComponentFixture<TestComponent47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent47Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
