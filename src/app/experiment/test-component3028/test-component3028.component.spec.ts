import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3028Component } from './test-component3028.component';

describe('TestComponent3028Component', () => {
  let component: TestComponent3028Component;
  let fixture: ComponentFixture<TestComponent3028Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3028Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
