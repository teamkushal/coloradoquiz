import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3439Component } from './test-component3439.component';

describe('TestComponent3439Component', () => {
  let component: TestComponent3439Component;
  let fixture: ComponentFixture<TestComponent3439Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3439Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
