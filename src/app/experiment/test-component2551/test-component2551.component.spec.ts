import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2551Component } from './test-component2551.component';

describe('TestComponent2551Component', () => {
  let component: TestComponent2551Component;
  let fixture: ComponentFixture<TestComponent2551Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2551Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
