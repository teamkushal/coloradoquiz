import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2794Component } from './test-component2794.component';

describe('TestComponent2794Component', () => {
  let component: TestComponent2794Component;
  let fixture: ComponentFixture<TestComponent2794Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2794Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
