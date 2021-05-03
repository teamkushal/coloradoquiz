import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3312Component } from './test-component3312.component';

describe('TestComponent3312Component', () => {
  let component: TestComponent3312Component;
  let fixture: ComponentFixture<TestComponent3312Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3312Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
