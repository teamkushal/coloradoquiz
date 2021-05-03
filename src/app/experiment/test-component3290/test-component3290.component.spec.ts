import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3290Component } from './test-component3290.component';

describe('TestComponent3290Component', () => {
  let component: TestComponent3290Component;
  let fixture: ComponentFixture<TestComponent3290Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3290Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
