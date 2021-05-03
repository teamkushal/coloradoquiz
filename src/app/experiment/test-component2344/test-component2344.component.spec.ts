import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2344Component } from './test-component2344.component';

describe('TestComponent2344Component', () => {
  let component: TestComponent2344Component;
  let fixture: ComponentFixture<TestComponent2344Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2344Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
