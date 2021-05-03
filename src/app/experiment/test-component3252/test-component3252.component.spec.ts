import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3252Component } from './test-component3252.component';

describe('TestComponent3252Component', () => {
  let component: TestComponent3252Component;
  let fixture: ComponentFixture<TestComponent3252Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3252Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
