import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3384Component } from './test-component3384.component';

describe('TestComponent3384Component', () => {
  let component: TestComponent3384Component;
  let fixture: ComponentFixture<TestComponent3384Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3384Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
