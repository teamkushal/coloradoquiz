import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3986Component } from './test-component3986.component';

describe('TestComponent3986Component', () => {
  let component: TestComponent3986Component;
  let fixture: ComponentFixture<TestComponent3986Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3986Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
