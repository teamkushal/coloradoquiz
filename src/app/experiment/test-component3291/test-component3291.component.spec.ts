import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3291Component } from './test-component3291.component';

describe('TestComponent3291Component', () => {
  let component: TestComponent3291Component;
  let fixture: ComponentFixture<TestComponent3291Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3291Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
