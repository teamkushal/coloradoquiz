import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3619Component } from './test-component3619.component';

describe('TestComponent3619Component', () => {
  let component: TestComponent3619Component;
  let fixture: ComponentFixture<TestComponent3619Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3619Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
