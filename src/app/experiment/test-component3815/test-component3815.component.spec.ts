import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3815Component } from './test-component3815.component';

describe('TestComponent3815Component', () => {
  let component: TestComponent3815Component;
  let fixture: ComponentFixture<TestComponent3815Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3815Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
