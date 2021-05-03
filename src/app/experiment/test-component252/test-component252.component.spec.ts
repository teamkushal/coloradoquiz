import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent252Component } from './test-component252.component';

describe('TestComponent252Component', () => {
  let component: TestComponent252Component;
  let fixture: ComponentFixture<TestComponent252Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent252Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
