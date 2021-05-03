import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3152Component } from './test-component3152.component';

describe('TestComponent3152Component', () => {
  let component: TestComponent3152Component;
  let fixture: ComponentFixture<TestComponent3152Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3152Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
