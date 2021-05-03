import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3477Component } from './test-component3477.component';

describe('TestComponent3477Component', () => {
  let component: TestComponent3477Component;
  let fixture: ComponentFixture<TestComponent3477Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3477Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
