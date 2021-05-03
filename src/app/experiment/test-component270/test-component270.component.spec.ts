import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent270Component } from './test-component270.component';

describe('TestComponent270Component', () => {
  let component: TestComponent270Component;
  let fixture: ComponentFixture<TestComponent270Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent270Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
