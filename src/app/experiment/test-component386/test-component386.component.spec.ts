import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent386Component } from './test-component386.component';

describe('TestComponent386Component', () => {
  let component: TestComponent386Component;
  let fixture: ComponentFixture<TestComponent386Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent386Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
