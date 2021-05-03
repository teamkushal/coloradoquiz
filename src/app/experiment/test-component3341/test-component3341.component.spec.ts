import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3341Component } from './test-component3341.component';

describe('TestComponent3341Component', () => {
  let component: TestComponent3341Component;
  let fixture: ComponentFixture<TestComponent3341Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3341Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
