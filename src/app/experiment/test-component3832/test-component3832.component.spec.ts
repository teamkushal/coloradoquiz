import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3832Component } from './test-component3832.component';

describe('TestComponent3832Component', () => {
  let component: TestComponent3832Component;
  let fixture: ComponentFixture<TestComponent3832Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3832Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
