import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3116Component } from './test-component3116.component';

describe('TestComponent3116Component', () => {
  let component: TestComponent3116Component;
  let fixture: ComponentFixture<TestComponent3116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3116Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
