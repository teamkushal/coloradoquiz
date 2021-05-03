import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2123Component } from './test-component2123.component';

describe('TestComponent2123Component', () => {
  let component: TestComponent2123Component;
  let fixture: ComponentFixture<TestComponent2123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
