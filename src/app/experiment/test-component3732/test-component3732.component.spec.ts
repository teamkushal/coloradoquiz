import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3732Component } from './test-component3732.component';

describe('TestComponent3732Component', () => {
  let component: TestComponent3732Component;
  let fixture: ComponentFixture<TestComponent3732Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3732Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
