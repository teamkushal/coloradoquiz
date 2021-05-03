import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3109Component } from './test-component3109.component';

describe('TestComponent3109Component', () => {
  let component: TestComponent3109Component;
  let fixture: ComponentFixture<TestComponent3109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3109Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
