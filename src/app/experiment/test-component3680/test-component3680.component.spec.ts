import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3680Component } from './test-component3680.component';

describe('TestComponent3680Component', () => {
  let component: TestComponent3680Component;
  let fixture: ComponentFixture<TestComponent3680Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3680Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
