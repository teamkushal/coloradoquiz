import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent845Component } from './test-component845.component';

describe('TestComponent845Component', () => {
  let component: TestComponent845Component;
  let fixture: ComponentFixture<TestComponent845Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent845Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
