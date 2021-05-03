import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3358Component } from './test-component3358.component';

describe('TestComponent3358Component', () => {
  let component: TestComponent3358Component;
  let fixture: ComponentFixture<TestComponent3358Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3358Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
