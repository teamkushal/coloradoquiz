import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3903Component } from './test-component3903.component';

describe('TestComponent3903Component', () => {
  let component: TestComponent3903Component;
  let fixture: ComponentFixture<TestComponent3903Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3903Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
