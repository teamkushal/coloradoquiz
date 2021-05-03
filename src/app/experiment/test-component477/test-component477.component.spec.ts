import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent477Component } from './test-component477.component';

describe('TestComponent477Component', () => {
  let component: TestComponent477Component;
  let fixture: ComponentFixture<TestComponent477Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent477Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
