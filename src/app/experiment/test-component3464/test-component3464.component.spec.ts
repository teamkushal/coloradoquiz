import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3464Component } from './test-component3464.component';

describe('TestComponent3464Component', () => {
  let component: TestComponent3464Component;
  let fixture: ComponentFixture<TestComponent3464Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3464Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
