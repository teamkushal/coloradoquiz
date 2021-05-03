import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent624Component } from './test-component624.component';

describe('TestComponent624Component', () => {
  let component: TestComponent624Component;
  let fixture: ComponentFixture<TestComponent624Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent624Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
