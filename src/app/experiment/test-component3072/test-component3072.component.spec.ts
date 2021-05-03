import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3072Component } from './test-component3072.component';

describe('TestComponent3072Component', () => {
  let component: TestComponent3072Component;
  let fixture: ComponentFixture<TestComponent3072Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3072Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
