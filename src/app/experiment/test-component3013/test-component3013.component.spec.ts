import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3013Component } from './test-component3013.component';

describe('TestComponent3013Component', () => {
  let component: TestComponent3013Component;
  let fixture: ComponentFixture<TestComponent3013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3013Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
