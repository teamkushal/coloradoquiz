import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3684Component } from './test-component3684.component';

describe('TestComponent3684Component', () => {
  let component: TestComponent3684Component;
  let fixture: ComponentFixture<TestComponent3684Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3684Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
