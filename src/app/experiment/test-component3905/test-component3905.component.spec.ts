import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3905Component } from './test-component3905.component';

describe('TestComponent3905Component', () => {
  let component: TestComponent3905Component;
  let fixture: ComponentFixture<TestComponent3905Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3905Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
