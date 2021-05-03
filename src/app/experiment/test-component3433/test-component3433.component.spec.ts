import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3433Component } from './test-component3433.component';

describe('TestComponent3433Component', () => {
  let component: TestComponent3433Component;
  let fixture: ComponentFixture<TestComponent3433Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3433Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
