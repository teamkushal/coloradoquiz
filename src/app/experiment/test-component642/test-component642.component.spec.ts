import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent642Component } from './test-component642.component';

describe('TestComponent642Component', () => {
  let component: TestComponent642Component;
  let fixture: ComponentFixture<TestComponent642Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent642Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
