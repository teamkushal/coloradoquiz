import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3074Component } from './test-component3074.component';

describe('TestComponent3074Component', () => {
  let component: TestComponent3074Component;
  let fixture: ComponentFixture<TestComponent3074Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3074Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
