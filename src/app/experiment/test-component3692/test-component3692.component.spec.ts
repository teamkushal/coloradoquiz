import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3692Component } from './test-component3692.component';

describe('TestComponent3692Component', () => {
  let component: TestComponent3692Component;
  let fixture: ComponentFixture<TestComponent3692Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3692Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
