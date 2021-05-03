import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3418Component } from './test-component3418.component';

describe('TestComponent3418Component', () => {
  let component: TestComponent3418Component;
  let fixture: ComponentFixture<TestComponent3418Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3418Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
