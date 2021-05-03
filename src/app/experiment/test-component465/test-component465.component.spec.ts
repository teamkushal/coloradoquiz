import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent465Component } from './test-component465.component';

describe('TestComponent465Component', () => {
  let component: TestComponent465Component;
  let fixture: ComponentFixture<TestComponent465Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent465Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
