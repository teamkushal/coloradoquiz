import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent688Component } from './test-component688.component';

describe('TestComponent688Component', () => {
  let component: TestComponent688Component;
  let fixture: ComponentFixture<TestComponent688Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent688Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
