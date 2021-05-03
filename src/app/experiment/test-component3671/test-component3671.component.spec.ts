import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3671Component } from './test-component3671.component';

describe('TestComponent3671Component', () => {
  let component: TestComponent3671Component;
  let fixture: ComponentFixture<TestComponent3671Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3671Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
