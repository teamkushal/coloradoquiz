import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3364Component } from './test-component3364.component';

describe('TestComponent3364Component', () => {
  let component: TestComponent3364Component;
  let fixture: ComponentFixture<TestComponent3364Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3364Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
