import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent286Component } from './test-component286.component';

describe('TestComponent286Component', () => {
  let component: TestComponent286Component;
  let fixture: ComponentFixture<TestComponent286Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent286Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
