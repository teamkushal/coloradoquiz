import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent151Component } from './test-component151.component';

describe('TestComponent151Component', () => {
  let component: TestComponent151Component;
  let fixture: ComponentFixture<TestComponent151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent151Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
