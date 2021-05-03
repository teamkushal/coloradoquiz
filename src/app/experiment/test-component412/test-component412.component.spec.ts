import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent412Component } from './test-component412.component';

describe('TestComponent412Component', () => {
  let component: TestComponent412Component;
  let fixture: ComponentFixture<TestComponent412Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent412Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
