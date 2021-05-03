import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent805Component } from './test-component805.component';

describe('TestComponent805Component', () => {
  let component: TestComponent805Component;
  let fixture: ComponentFixture<TestComponent805Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent805Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
