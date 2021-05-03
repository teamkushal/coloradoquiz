import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3835Component } from './test-component3835.component';

describe('TestComponent3835Component', () => {
  let component: TestComponent3835Component;
  let fixture: ComponentFixture<TestComponent3835Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3835Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
